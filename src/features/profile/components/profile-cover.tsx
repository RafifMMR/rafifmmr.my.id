import { BrandContextMenu } from "@/components/brand-context-menu";
import { RafifMark } from "@/components/rafif-mark";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <BrandContextMenu>
      <div
        className={cn(
          "aspect-[3/2] border-x border-edge select-none sm:aspect-[3/1]",
          "flex items-center justify-center text-black dark:text-white",
          "screen-line-before screen-line-after before:-top-px after:-bottom-px",
          "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
        )}
      >
        <RafifMark
          id="js-cover-mark"
          className="h-12 w-auto sm:h-16 md:h-20 lg:h-1/4"
        />
      </div>
    </BrandContextMenu>
  );
}
