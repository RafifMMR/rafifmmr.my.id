import { BrandContextMenu } from "@/components/brand-context-menu";
import { RafifMark } from "@/components/rafif-mark";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-[4/3] border-x border-edge select-none sm:aspect-[3/1]",
          "flex items-center justify-center text-black dark:text-white",
          "overflow-hidden",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        <RafifMark
          id="js-cover-mark"
          className="max-h-6 w-auto sm:max-h-8 md:max-h-12 lg:max-h-[25%]"
        />
      </div>
    </BrandContextMenu>
  );
}
