import Image from "next/image";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { USER } from "@/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { VerifiedIcon } from "./verified-icon";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-[2px] my-[3px]">
          <Image
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            width={512}
            height={512}
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Flag of Indonesia */}
      <svg
        className="absolute top-0 -left-px h-8 rounded sm:h-9"
        viewBox="0 0 30 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="20" fill="#FFF" />
        <rect width="30" height="10" fill="#E31D1A" />
      </svg>

      <div className="flex flex-1 flex-col">
        <div
          className={cn(
            "flex grow items-end pb-1 pl-4",
            "bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56 sm:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)]"
          )}
        >
          <div className="font-mono text-xs text-wrap break-words whitespace-normal text-zinc-300 select-none dark:text-zinc-700">
            {"Coding like poetry "}
            <span className="inline dark:hidden">should be short</span>
            <span className="hidden dark:inline">should be short</span>
            {" and concise."}
          </div>
        </div>

        <div className="border-t border-edge">
          <h1 className="flex items-center pl-4 font-heading text-3xl font-semibold">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.6em] text-info" />
            </SimpleTooltip>
          </h1>

          <div className="h-12 border-t border-edge py-1 pl-4 sm:h-auto">
            <FlipSentences sentences={[USER.bio, ...USER.flipSentences]} />
          </div>
        </div>
      </div>
    </div>
  );
}
