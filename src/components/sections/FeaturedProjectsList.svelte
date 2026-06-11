<script lang="ts">
import placeholderImage from "@/img/placeholder.png"
import type { ProjectData, ProjectDataDomains } from "@/lib/types"

interface Props {
  projects: ProjectData[]
}

let { projects }: Props = $props()

let selectedDomain = $state<ProjectDataDomains | null>(null)

const allDomains = $derived(Array.from(new Set(projects.flatMap(p => p.domains))))
let filteredProjects = $derived(
  selectedDomain !== null ? projects.filter(p => p.domains.includes(selectedDomain!)) : projects,
)

function getStatusColor(status: ProjectData["status"]) {
  switch (status) {
    case "Active":
      return "border-primary/30 bg-primary/10 text-primary"
    case "Completed":
      return "border-secondary/30 bg-secondary/10 text-secondary"
    case "Archived":
      return "border-muted/30 bg-muted/10 text-muted"
    case "WIP":
    default:
      return "border-tertiary/30 bg-tertiary/10 text-tertiary"
  }
}

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

function showPreview(proj: ProjectData) {
  if (!hoverCard || !cardTitle || !cardDesc || !cardImg || !cardTags || !cardTime) return

  cardTitle.textContent = proj.name
  cardDesc.textContent = proj.text
  cardTags.textContent =
    proj.domains.map(d => `@${d}`).join(" ") + " " + proj.tags.map(t => `#${t}`).join(" ")
  // cardTime.textContent = proj.year ? String(proj.year) : ""

  const image = (proj.img || placeholderImage) as unknown as string
  cardImg.src = image
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
  <!-- filter bar -->
  <div
    class="flex flex-wrap items-center gap-2 text-xs font-mono select-none bg-surface-2 p-3 rounded-xl border border-border/40"
  >
    {#each [null, ...allDomains] as domain}
      <button
        type="button"
        onclick={() => (selectedDomain = domain)}
        class="px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-semibold uppercase tracking-wider
          {selectedDomain === domain
          ? 'bg-secondary/60'
          : 'border-border/40 text-foreground hover:bg-secondary/20'}"
      >
        {domain ?? "All"}
      </button>
    {/each}
  </div>

  <!-- projects list -->
  <div class="border border-border/50 rounded-xl bg-surface shadow-xs overflow-hidden">
    <div
      class="grid grid-cols-12 gap-4 px-5 py-3 items-center border-b border-border/40 bg-surface-2 text-xs font-mono font-bold text-muted uppercase tracking-wider select-none"
    >
      <div class="col-span-12 md:col-span-4">Name</div>
      <div class="hidden md:block md:col-span-5">Description</div>
      <div class="hidden md:block md:col-span-3 text-right">Links</div>
    </div>

    <div class="divide-y divide-border/80">
      {#each filteredProjects as proj (proj.id)}
        <div
          class="flex flex-col md:grid md:grid-cols-12 gap-4 px-5 py-4 md:items-center hover:bg-surface-2/70 transition-colors group"
        >
          <div
            class="col-span-12 md:col-span-4 flex items-center gap-3 cursor-help select-none"
            onmouseenter={() => showPreview(proj)}
            onmousemove={movePreview}
            onmouseleave={hidePreview}
            role="button"
            tabindex="0"
            onkeydown={e => e.key === "Enter" && showPreview(proj)}
          >
            <div class="flex flex-col gap-2">
              <div class="flex flex-row gap-2 items-center">
                <h3
                  class="text-lg font-medium group-hover:text-secondary dark:group-hover:text-secondary transition-colors font-heading"
                >
                  {proj.name}
                </h3>

                {#each proj.domains as dom}
                  <kbd
                    class="font-mono mr-2 text-xs font-medium text-secondary bg-secondary/10 dark:bg-secondary/15 px-1.5 py-0.5 rounded border border-border/20"
                  >
                    {dom}
                  </kbd>
                {/each}
              </div>

              <div class="flex flex-wrap gap-1.5 items-center select-none">
                {#each proj.tags as tag}
                  <kbd class="font-mono text-xs text-foreground-soft">
                    #{tag}
                  </kbd>
                {/each}
              </div>
            </div>
          </div>

          <div
            class="col-span-12 md:col-span-5 space-y-1.5 pr-2 md:pl-0 pl-11 cursor-help"
            onmouseenter={() => showPreview(proj)}
            onmousemove={movePreview}
            onmouseleave={hidePreview}
            role="button"
            tabindex="0"
            onkeydown={e => e.key === "Enter" && showPreview(proj)}
          >
            <p class="line-clamp-1 prose dark:prose-invert prose-sm">
              {proj.text}
            </p>
          </div>

          <div
            class="col-span-12 md:col-span-3 flex md:justify-end gap-2.5 md:mt-0 select-none md:pl-0 pl-11"
          >
            {#if proj.url}
              <a
                href={proj.url}
                target="_blank"
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-secondary/50 rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <span>Live</span>
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
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-dashed rounded-lg cursor-not-allowed select-none"
              >
                <span>Offline</span>
              </span>
            {/if}

            {#if proj.github}
              <a
                href={proj.github}
                target="_blank"
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors bg-surface-3 hover:bg-background"
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
                class="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-dashed rounded-lg cursor-not-allowed select-none"
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
