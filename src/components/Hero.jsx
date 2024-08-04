import { Carousel, Typography, Button } from "@material-tailwind/react";
import welcome from "../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg";
import carousel_2 from "../assets/team_pc.jpg";
import carousel_3 from "../assets/tom-parkes-Ns-BIiW_cNU-unsplash.jpg";


export function HeroSection() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <img
          src={welcome}
          alt="Welcome"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/60 p-4 md:p-8 lg:p-12">
          <div className="text-center max-w-lg md:max-w-xl lg:max-w-2xl">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              The Modern Web Development Era
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-90 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              "Step into the future of digital innovation with our cutting-edge
              web development solutions. In today&apos;s rapidly evolving online
              landscape, staying ahead means embracing the latest technologies
              and design trends. We specialize in creating dynamic, user-centric
              websites that not only captivate and engage your audience but also
              drive business growth. Discover how our modern approach to web
              development can transform your online presence and set you apart
              in a competitive market."
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" color="white" className="mb-2 sm:mb-0">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                View our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <img
          src={carousel_2}
          alt="Transform Your Vision"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/60 p-4 md:p-8 lg:p-12">
          <div className="text-center max-w-lg md:max-w-xl lg:max-w-2xl">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Transform Your Vision into Reality with Expert Web Development
              Services
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-90 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              At the heart of our web development services lies a commitment to
              translating your unique vision into a stunning online reality. Our
              team of experienced developers and designers work collaboratively
              to build websites that are not only visually striking but also
              functionally robust and user-friendly. From initial concept to
              final launch, we focus on creating seamless digital experiences
              tailored to your specific needs, ensuring that your online
              presence stands out and performs at its best in today&apos;s
              competitive market.
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" color="white" className="mb-2 sm:mb-0">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                View our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
        <img
          src={carousel_3}
          alt="Ready to Elevate"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/60 p-4 md:p-8 lg:p-12">
          <div className="text-center max-w-lg md:max-w-xl lg:max-w-2xl">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Ready to Elevate Your Digital Experience? Let's Connect and Create!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-8 opacity-90 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              "Step into the future of digital innovation with our cutting-edge
              web development solutions. In today&apos;s rapidly evolving online
              landscape, staying ahead means embracing the latest technologies
              and design trends. We specialize in creating dynamic, user-centric
              websites that not only captivate and engage your audience but also
              drive business growth. Discover how our modern approach to web
              development can transform your online presence and set you apart
              in a competitive market."
            </Typography>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" color="white" className="mb-2 sm:mb-0">
                Connect with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
