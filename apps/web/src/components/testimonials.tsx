import { cn } from "@/lib/utils"
import { Image } from "@/components/ui/image"
import { testimonialsVariants } from "@/components/constants"
import type { TestimonialsProps } from "@/components/types"

export function Testimonials({
  title,
  subtitle,
  testimonials,
  className,
  variant,
  layout,
  container,
}: TestimonialsProps) {
  return (
    <section className={cn(testimonialsVariants({ variant, layout, container }), className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        <div
          className={cn(
            layout === "grid" && "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            layout === "carousel" && "flex gap-8 overflow-x-auto pb-4",
          )}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "bg-card text-card-foreground rounded-lg border p-6 shadow-sm",
                layout === "carousel" && "flex-shrink-0 w-80",
              )}
            >
              <blockquote className="text-lg mb-4">"{testimonial.quote}"</blockquote>
              <div className="flex items-center gap-3">
                {testimonial.avatar && (
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                    {testimonial.company && (
                      <>{" at "}{testimonial.company}</>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
