import { cn } from "@/lib/utils"
import { featureVariants } from "@/components/constants"
import { Image } from "@/components/ui/image"
import type { FeatureProps } from "@/components/types"
import { Button } from "@/components/ui/button"

export function Feature({
  title,
  subtitle,
  description,
  image,
  imageAlt = "",
  children,
  className,
  variant,
  layout,
  container,
  onNavigate
}: FeatureProps) {
  const hasImage = image && layout !== "no-image"

  return (
    <section className={cn(featureVariants({ variant, layout, container }), className)}>
      <div className="max-w-7xl mx-auto">
        <div
          className={cn("grid items-center gap-8", hasImage && layout !== "image-top" && "lg:grid-cols-2 lg:gap-16")}
        >
          {/* Content */}
          <div className={cn("space-y-6", layout === "image-right" && hasImage && "lg:order-1")}>
            {subtitle && <p className="text-sm font-semibold text-primary uppercase tracking-wide">{subtitle}</p>}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
            {children}
            {onNavigate && (
              <Button
            size="lg"
            onClick={() => onNavigate("contact")} // 👈 example usage
            className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90"
          >
            Contact Us
          </Button>
        )}
          </div>

          {/* Image */}
          {hasImage && (
            <div className={cn("relative", layout === "image-right" && "lg:order-2", layout === "image-top" && "mb-8")}>
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
