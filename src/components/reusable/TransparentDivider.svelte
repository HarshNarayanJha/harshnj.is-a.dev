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
    class="m-auto min-h-[1em] w-px self-stretch bg-linear-to-b from-transparent via-border/75 to-transparent dark:via-border/75 {heightClass}"
  ></div>
{:else}
  <hr
    class="my-12 h-px border-t-0 bg-transparent bg-linear-to-r from-transparent via-border/75 to-transparent dark:via-border/75 {widthClass}"
  />
{/if}
