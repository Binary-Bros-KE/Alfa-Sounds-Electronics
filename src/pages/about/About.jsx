import { Star, Award, Users, TrendingUp, ChevronRight } from "lucide-react"
import Testimonials from "../../components/testimonials/Testimonials"

const About = () => {
    const features = [
        { icon: Star, title: "Quality Products", description: "We offer only the best, carefully curated products." },
        { icon: TrendingUp, title: "Fast Shipping", description: "Quick and reliable delivery to your doorstep." },
        { icon: Users, title: "Customer Support", description: "24/7 support to assist you with any queries." },
    ]

    const teamMembers = [
        { name: "John Doe", role: "Founder & CEO", image: "/team/placeholder.jpg" },
        { name: "Jane Smith", role: "Head of Operations", image: "/team/placeholder.jpg" },
        { name: "Mike Johnson", role: "Lead Developer", image: "/team/placeholder.jpg" },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">About EAKHA limited</h1>
                    <p className="text-xl mb-8">Delivering Quality Products Since 2010</p>
                    <a
                        href="/products"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
                    >
                        Explore Our Products
                    </a>
                </div>
            </section>

            {/* Company History & Mission */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2010, eakha started with a simple mission: to provide high-quality products at
                            affordable prices. Over the years, we've grown from a small startup to a leading online retailer, serving
                            customers coutrywide.
                        </p>
                        <p className="text-gray-600">
                            Our commitment to customer satisfaction, innovative technology, and sustainable practices has helped us
                            build a loyal customer base and a reputation for excellence in the e-commerce industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="text-xl font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <Testimonials />
            </section>

            {/* Call-to-Action */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Products?</h2>
                    <p className="text-xl text-gray-600 mb-8">Join thousands of satisfied customers and start shopping today!</p>
                    <a
                        href="/products"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center"
                    >
                        Shop Now
                        <ChevronRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default About

