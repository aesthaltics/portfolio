import { Button } from "@/components/ui/button"

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export const ProjectCard = ({
  image,
  name,
  description,
  url,
}: {
  image: string
  name: string
  description: string
  url: string
}) => {
  return (
    <Card className="w-sm">
      <img
        src={image}
        alt="project image"
        className="relative z-20 aspect-video w-full object-cover object-top"
      />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          <a href={url}>
            <ExternalLink />
          </a>
        </CardAction>
      </CardHeader>
      {/* <CardContent>
        <p>{data.description}</p>
      </CardContent> */}
      <CardFooter>
        <Button className="ml-auto">Om prosjektet</Button>
      </CardFooter>
    </Card>
  )
}
