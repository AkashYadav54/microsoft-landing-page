"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingCart, User, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function MicrosoftHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselSlides = [
    {
      title: "Meet Surface Laptop",
      subtitle: "Unlock AI features like Live Captions and Cocreator with this exceptionally powerful laptop.",
      buttonText: "Learn more",
      image: "/surface-laptop-with-copilot-ai-colorful-screen-dis.png",
      alt: "Surface Laptop",
    },
    {
      title: "Surface Pro, Copilot+ PC",
      subtitle: "The laptop-converted flexibility and AI features like Cocreator enable you to do more than you ever.",
      buttonText: "Learn more",
      image: "/surface-pro-laptop-with-copilot-pc-branding.png",
      alt: "Surface Pro",
    },
    {
      title: "Copilot is your AI companion",
      subtitle: "Asking for your help, Copilot can support you in ways that you need it.",
      buttonText: "Download the Copilot app",
      image: "/copilot-ai-interface-with-colorful-design-elements.png",
      alt: "Copilot",
    },
    {
      title: "Xbox Series X",
      subtitle: "The fastest, most powerful Xbox ever.",
      buttonText: "Shop Xbox Series X",
      image: "/xbox-series-x-black-gaming-console.png",
      alt: "Xbox Series X",
    },
    {
      title: "Xbox Game Pass Ultimate",
      subtitle:
        "Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console, PC, or cloud.",
      buttonText: "Join now",
      image: "/xbox-game-pass-ultimate-gaming-montage-with-multip.png",
      alt: "Xbox Game Pass",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [carouselSlides.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <img src="/microsoft-logo.png" alt="Microsoft" className="h-6" />
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Microsoft 365
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Teams
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Copilot
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Windows
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Surface
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Xbox
                </a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Support
                </a>
              </nav>
            </div>

            {/* Right side - Search, Cart, Sign in */}
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">All Microsoft</div>
              <Search className="w-4 h-4 text-gray-600" />
              <ShoppingCart className="w-4 h-4 text-gray-600" />
              <User className="w-4 h-4 text-gray-600" />
              <div className="text-sm text-gray-600">Sign in</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel Section */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="flex items-center justify-between min-h-[400px]">
              <div className="flex-1 max-w-lg">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">{carouselSlides[currentSlide].title}</h1>
                <p className="text-lg text-gray-600 mb-6">{carouselSlides[currentSlide].subtitle}</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                  {carouselSlides[currentSlide].buttonText}
                </Button>
              </div>
              <div className="flex-1 flex justify-end">
                <img
                  src={carouselSlides[currentSlide].image || "/placeholder.svg"}
                  alt={carouselSlides[currentSlide].alt}
                  className="max-w-full h-auto max-h-[350px] object-contain"
                />
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-16">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <div className="text-sm text-blue-600">Choose your Microsoft 365</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
              </div>
              <div className="text-sm text-blue-600">Shop Xbox</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
              </div>
              <div className="text-sm text-blue-600">Get Windows 11</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-600 rounded-sm"></div>
              </div>
              <div className="text-sm text-blue-600">Explore Surface devices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Surface Pro Card */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/surface-pro-laptop-with-copilot-pc-branding.png"
                  alt="Surface Pro"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Surface Pro, Copilot+ PC</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    The laptop-converted flexibility and AI features like Cocreator enable you to do more than you ever.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Copilot Card */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/copilot-ai-interface-with-colorful-design-elements.png"
                  alt="Copilot"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Copilot is your AI companion</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Asking for your help, Copilot can support you in ways that you need it.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Download the Copilot app
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Xbox Series S Card */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/xbox-series-s-white-gaming-console.png"
                  alt="Xbox Series S"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Xbox Series S</h3>
                  <p className="text-sm text-gray-600 mb-4">Next-gen performance in the smallest Xbox ever.</p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Shop Xbox Series S
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Xbox Series X Card */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/xbox-series-x-black-gaming-console.png"
                  alt="Xbox Series X"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Xbox Series X</h3>
                  <p className="text-sm text-gray-600 mb-4">The fastest, most powerful Xbox ever.</p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Shop Xbox Series X
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Xbox Game Pass Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-black rounded-lg overflow-hidden">
            <div className="flex">
              <div className="flex-1 p-12 text-white">
                <h2 className="text-3xl font-semibold mb-4">Xbox Game Pass Ultimate</h2>
                <p className="text-lg mb-6">
                  Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console, PC, or
                  cloud.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Join now</Button>
              </div>
              <div className="flex-1">
                <img
                  src="/xbox-game-pass-ultimate-gaming-montage-with-multip.png"
                  alt="Xbox Game Pass"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Business Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">For business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Surface Pro for Business */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/surface-pro-business-laptop-with-intel-branding.png"
                  alt="Surface Pro for Business"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded mb-2 inline-block">NEW</div>
                  <h3 className="font-semibold text-lg mb-2">Surface Pro for Business, Copilot+ PC | Intel</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Designed for work with Intel Core™ Ultra processors Series 2 that power AI experiences to amplify
                    your team.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Microsoft 365 Copilot */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/microsoft-365-copilot-interface-with-productivity-.png"
                  alt="Microsoft 365 Copilot"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Microsoft 365 Copilot</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Save time and focus on the things that matter most with AI in Microsoft 365 for business.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Windows 365 */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/windows-365-cloud-pc-interface-on-multiple-devices.png"
                  alt="Windows 365"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">20% off Windows 365</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Stream your Cloud PC from any device. Windows experience on any device.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Era */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-0">
                <img
                  src="/ai-technology-abstract-visualization-with-flowing-.png"
                  alt="Join the era of AI"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Join the era of AI</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Discover AI solutions and tools with the latest Microsoft AI innovations.
                  </p>
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
                    Explore AI solutions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Follow Microsoft</span>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <div className="w-6 h-6 bg-black rounded"></div>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">What's new</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft 365
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Games
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Surface Pro 9
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Surface Laptop 5
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Surface Studio 2+
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Windows 11 apps
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Microsoft Store</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Account profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Download Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft Store support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Order tracking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Education</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft in education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Devices for education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft Teams for Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft 365 Education
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Office Education
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Business</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft Cloud
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Azure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Dynamics 365
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft 365
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Developer & IT</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Developer Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft Learn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Microsoft Tech Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Azure Marketplace
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    About Microsoft
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Company news
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Privacy at Microsoft
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-400 rounded"></div>
                <span className="text-sm text-gray-600">English (India)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span className="text-sm text-gray-600">Your Privacy Choices</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Contact Microsoft
              </a>
              <a href="#" className="hover:text-gray-900">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of use
              </a>
              <a href="#" className="hover:text-gray-900">
                Trademarks
              </a>
              <a href="#" className="hover:text-gray-900">
                About our ads
              </a>
              <span>© Microsoft 2024</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <div className="fixed bottom-4 right-4">
        <Button variant="outline" size="sm" className="bg-white shadow-lg">
          Back to top
        </Button>
      </div>
    </div>
  )
}
