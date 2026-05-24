<script lang="ts">
interface Project {
  id: string
  name: string
  text: string
  url?: string
  github?: string
  domains: string[]
  tags: string[]
  year?: number
  status: "Active" | "Completed" | "Archived" | "WIP"
  img?: string
}

interface Props {
  projects: Project[]
}

let { projects }: Props = $props()

let selectedDomain = $state("All")

const allDomains = $derived(["All", ...Array.from(new Set(projects.flatMap(p => p.domains)))])
let filteredProjects = $derived(
  selectedDomain === "All" ? projects : projects.filter(p => p.domains.includes(selectedDomain)),
)

function getStatusColor(status: string) {
  switch (status) {
    case "Active":
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
    case "Completed":
      return "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
    case "Archived":
      return "border-neutral-500/30 bg-neutral-500/10 text-neutral-500 dark:text-neutral-400"
    case "WIP":
    default:
      return "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
  }
}

// Hover card logic
let hoverCard: HTMLElement | null = $state(null)
let cardTitle: HTMLElement | null = $state(null)
let cardDesc: HTMLElement | null = $state(null)
let cardImg: HTMLImageElement | null = $state(null)
let cardTags: HTMLElement | null = $state(null)
let cardTime: HTMLElement | null = $state(null)

$effect(() => {
  hoverCard = document.getElementById("project-hover-card")
  if (hoverCard) {
    cardTitle = hoverCard.querySelector("[data-hover-title]")
    cardDesc = hoverCard.querySelector("[data-hover-desc]")
    cardImg = hoverCard.querySelector("[data-hover-img]")
    cardTags = hoverCard.querySelector("[data-hover-tags]")
    cardTime = hoverCard.querySelector("[data-hover-time]")
  }
})

function showPreview(proj: Project) {
  if (!hoverCard || !cardTitle || !cardDesc || !cardImg || !cardTags || !cardTime) return

  cardTitle.textContent = proj.name
  cardDesc.textContent = proj.text
  cardTags.textContent =
    proj.domains.map(d => `@${d}`).join(" ") + " " + proj.tags.map(t => `#${t}`).join(" ")
  // cardTime.textContent = proj.year ? String(proj.year) : ""

  const fallbackImg = "/_astro/placeholder.png"
  const imageSrc = proj.img || fallbackImg
  cardImg.src = imageSrc
  cardImg.classList.remove("hidden")

  hoverCard.classList.remove("opacity-0", "scale-95")
  hoverCard.classList.add("opacity-100", "scale-100")
}

function movePreview(e: MouseEvent) {
  if (!hoverCard) return
  const cardWidth = hoverCard.offsetWidth || 320
  const cardHeight = hoverCard.offsetHeight || 220

  let x = e.clientX + 20
  let y = e.clientY + 20

  if (x + cardWidth > window.innerWidth) {
    x = e.clientX - cardWidth - 20
  }
  if (y + cardHeight > window.innerHeight) {
    y = e.clientY - cardHeight - 20
  }

  hoverCard.style.left = `${x}px`
  hoverCard.style.top = `${y}px`
}

function hidePreview() {
  if (!hoverCard) return
  hoverCard.classList.remove("opacity-100", "scale-100")
  hoverCard.classList.add("opacity-0", "scale-95")
}
</script>

<div class="mx-auto max-w-4xl px-4 py-4 space-y-6">
  <!-- Interactive filter bar -->
  <div
    class="flex flex-wrap items-center gap-2 text-xs font-mono select-none bg-neutral-50/50 dark:bg-neutral-900/20 p-3 rounded-xl border border-neutral-200/60 dark:border-neutral-800"
  >
    <span class="text-muted mr-2 uppercase font-bold">Filter:</span>
    {#each allDomains as domain}
      <button
        type="button"
        onclick={() => (selectedDomain = domain)}
        class="px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer font-semibold uppercase tracking-wider
          {selectedDomain === domain
          ? 'bg-teal-500 border-teal-500 text-white'
          : 'border-neutral-200/60 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900/60'}"
      >
        {domain}
      </button>
    {/each}
  </div>

  <!-- Projects repository list -->
  <div
    class="border border-neutral-200/60 dark:border-neutral-800/80 rounded-xl bg-card text-card-foreground shadow-xs overflow-hidden"
  >
    <!-- Header of Repository List (CLI aesthetic) -->
    <div
      class="grid grid-cols-12 gap-4 px-5 py-3 items-center border-b border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/10 text-xs font-mono font-bold text-muted uppercase tracking-wider select-none"
    >
      <div class="col-span-12 md:col-span-4">Repository / Name</div>
      <div class="hidden md:block md:col-span-5">Tagline, Domains & Stack</div>
      <div class="hidden md:block md:col-span-3 text-right">Outbound / Source</div>
    </div>

    <!-- Rows -->
    <div class="divide-y divide-neutral-100 dark:divide-neutral-900/60">
      {#each filteredProjects as proj (proj.id)}
        <!-- svelte-ignore a11y_mouse_events_have_key_events -->
        <div
          class="flex flex-col md:grid md:grid-cols-12 gap-4 px-5 py-4 md:items-center hover:bg-neutral-50/30 dark:hover:bg-neutral-900/10 transition-colors duration-200 group"
        >
          <!-- Column 1: Icon & Name & Badges -->
          <div
            class="col-span-12 md:col-span-4 flex items-center gap-3 cursor-help select-none"
            onmouseenter={() => showPreview(proj)}
            onmousemove={movePreview}
            onmouseleave={hidePreview}
            role="button"
            tabindex="0"
            onkeydown={e => e.key === "Enter" && showPreview(proj)}
          >
            <span
              class="text-teal-500 bg-teal-500/10 dark:bg-teal-500/5 p-2 rounded-lg group-hover:scale-105 transition-transform duration-200 flex items-center justify-center shrink-0"
            >
              <!-- Folder SVG -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                />
              </svg>
            </span>
            <div class="flex flex-col gap-2">
              <h3
                class="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-200 font-heading"
              >
                {proj.name}
              </h3>

              <div class="flex items-center flex-wrap gap-1.5">
                {#if proj.year}
                  <span
                    class="bg-card-muted text-card-muted-foreground rounded px-2 py-0.5 font-mono text-xs"
                  >
                    {proj.year}
                  </span>
                {/if}
                <span
                  class="text-xs font-mono font-semibold border px-1.5 py-0.5 rounded {getStatusColor(
                    proj.status,
                  )}"
                >
                  {proj.status}
                </span>
              </div>
            </div>
          </div>

          <!-- Column 2: Tagline, Domains & Stack (visible everywhere with responsive sizes and margins) -->
          <div
            class="col-span-12 md:col-span-5 space-y-1.5 pr-2 md:pl-0 pl-11 cursor-help"
            onmouseenter={() => showPreview(proj)}
            onmousemove={movePreview}
            onmouseleave={hidePreview}
            role="button"
            tabindex="0"
            onkeydown={e => e.key === "Enter" && showPreview(proj)}
          >
            <p class="text-xs leading-relaxed text-muted line-clamp-2 md:line-clamp-1">
              {proj.text}
            </p>
            <div class="flex flex-wrap gap-1.5 items-center select-none">
              {#each proj.domains as dom}
                <span
                  class="font-mono text-xs text-teal-600 dark:text-teal-400 bg-teal-500/10 dark:bg-teal-500/5 px-1.5 py-0.5 rounded border border-teal-500/20"
                >
                  {dom}
                </span>
              {/each}
              {#each proj.tags as tag}
                <span
                  class="font-mono text-xs font-medium bg-card-muted text-card-muted-foreground px-2 py-0.5 rounded border border-neutral-200/40 dark:border-neutral-800/40"
                >
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <!-- Column 3: Outbound / Source Links -->
          <div
            class="col-span-12 md:col-span-3 flex md:justify-end gap-2.5 md:mt-0 select-none md:pl-0 pl-11"
          >
            {#if proj.url}
              <a
                href={proj.url}
                target="_blank"
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-500 dark:bg-teal-600 rounded-lg hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-200"
              >
                <span>Live</span>
                <!-- Eye SVG -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            {:else}
              <span
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-400 dark:text-neutral-600 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg cursor-not-allowed select-none"
              >
                <span>Offline</span>
              </span>
            {/if}

            {#if proj.github}
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800/80 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-850 transition-colors duration-200 dark:hover:bg-neutral-800"
              >
                <span>Source</span>
                <!-- Github icon SVG -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            {:else}
              <span
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-400 dark:text-neutral-600 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-lg cursor-not-allowed select-none dark:bg-neutral-800"
              >
                <span>Private</span>
              </span>
            {/if}
          </div>
        </div>
      {:else}
        <div class="px-5 py-8 text-center text-sm font-mono text-muted">
          No projects found matching the filter.
        </div>
      {/each}
    </div>
  </div>
</div>
