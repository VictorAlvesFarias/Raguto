import { DropdownMenu } from "radix-ui";
import { Check, Palette } from "lucide-react";
import { THEMES, useTheme, type ThemeId } from "../themes";
import { cn } from "../lib";

function Swatch({ colors }: { colors: readonly string[] }) {
  return (
    <span className="flex -space-x-1.5">
      {colors.map((color) => (
        <span key={color} className="size-4 rounded-full ring-2 ring-cream" style={{ backgroundColor: color }} />
      ))}
    </span>
  );
}

export function ThemePicker({ className }: { className?: string }) {
  const [theme, setTheme] = useTheme();

  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        className={cn(
          "grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-white/20",
          className,
        )}
        aria-label="Escolher tema de cores"
      >
        <Palette className="size-5" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={10}
          className="z-[70] min-w-52 animate-fade-in rounded-2xl bg-cream p-2 text-ink shadow-xl shadow-black/15 ring-1 ring-ink/10"
        >
          <DropdownMenu.Label className="px-3 pt-1 pb-2 text-xs font-semibold tracking-wide text-ink/50 uppercase">
            Tema
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={theme} onValueChange={(value) => setTheme(value as ThemeId)}>
            {THEMES.map((option) => (
              <DropdownMenu.RadioItem
                key={option.id}
                value={option.id}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium outline-none select-none data-[highlighted]:bg-fog"
              >
                <Swatch colors={option.swatch} />
                <span className="flex-1">{option.label}</span>
                <DropdownMenu.ItemIndicator>
                  <Check className="size-4 text-brand" />
                </DropdownMenu.ItemIndicator>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
