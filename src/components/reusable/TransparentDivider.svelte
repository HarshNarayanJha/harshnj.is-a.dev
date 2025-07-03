<script lang="ts">
interface TransparentDividerProps {
  vertical?: boolean
  heightClass?: string
  widthClass?: string
}

let { vertical = false, heightClass, widthClass }: TransparentDividerProps = $props()
</script>

{#if vertical}
  <div
    class="m-auto min-h-[1em] w-px self-stretch bg-gradient-to-b from-transparent
    via-neutral-500 to-transparent opacity-55 dark:via-neutral-300 {heightClass}"
  ></div>
{:else}
  <hr
    class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-55 dark:via-neutral-300 {widthClass}"
  />
{/if}
