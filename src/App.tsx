// import React from 'react';
import { ShoppingBag, Truck, Gift, Facebook, Instagram, Youtube } from 'lucide-react';
import gambar1 from './69271e443859d81cc0c8982d3220e267.jpg';
import gambar2 from './1d2e1f1ee72db78f06f830799c90d342.jpg';
import gambar3 from "./7bd673a2eb80429f6061ee3bac72cb97.jpg";
import galleryImg1 from './819c542bf78e7d0ef9f64a5a7b87b114.jpg'; // Replace with actual path
import galleryImg2 from './69271e443859d81cc0c8982d3220e267.jpg'; // Replace with actual path
import galleryImg3 from './1e910ef11de948f5b9b7838dbd0824a8.jpg'; // Replace with actual path
import galleryImg4 from './1.jpeg'; // Replace with actual path
import galleryImg5 from './068e53ed48e5b0ee352a27093522069f.jpg'; // Replace with actual path
import galleryImg6 from './1e910ef11de948f5b9b7838dbd0824a8.jpg'; // Replace with actual path

function App() {
  const puddings = [
    {
      name: 'White Chocolate Bites',
      price: 'Rp 35.000',
      image: gambar3
    },
    {
      name: 'Oatmeal Bites',
      price: 'Rp 32.000',
      image: gambar2
    },
    {
      name: 'Jam & Poppy Seed Bites',
      price: 'Rp 38.000',
      image: gambar1
    }
  ];

  const gallery = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-pink-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Sweeding</h1>
          <div className="flex gap-4">
            <button className="hover:text-pink-600">Search</button>
            <button className="hover:text-pink-600">Account</button>
            <button className="hover:text-pink-600">Cart (0)</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              PUDING SEHAT BUATAN RUMAH DENGAN RASA BERVARIASI
            </h2>
            <button className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800">
              BELANJA SEKARANG
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-4">PUDDING TERBAIK</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Puding Sweeding hadir dalam berbagai varian rasa buah dan topping yang segar. Dibuat dengan bahan alami dan rendah gula untuk mendukung gaya hidup sehat Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {puddings.map((pudding, index) => (
              <div key={index} className="text-center">
                <img src={pudding.image} alt={pudding.name} className="w-full aspect-square object-cover mb-4"/>
                <h3 className="font-medium mb-2">{pudding.name}</h3>
                <p className="text-gray-600">{pudding.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-4">/ IKUTI KAMI UNTUK LEZAT LAINNYA</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <img key={index} src={image} alt="Gallery" className="w-full aspect-square object-cover" />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border border-black px-8 py-2 hover:bg-black hover:text-white">
              Load more
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <ShoppingBag className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-medium">LAYANAN AMBIL SENDIRI BARU</h3>
              <p className="text-sm text-gray-600">Nikmati segar</p>
            </div>
            <div>
              <Truck className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-medium">PENGIRIMAN GRATIS</h3>
              <p className="text-sm text-gray-600">Dikirim ke pintu rumah Anda</p>
            </div>
            <div>
              <Gift className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-medium">BUNGKUS HADIAH SPESIAL</h3>
              <p className="text-sm text-gray-600">Kirim kejutan manis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">SHOP</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-pink-600">About</a></li>
                <li><a href="#" className="hover:text-pink-600">FAQ</a></li>
                <li><a href="#" className="hover:text-pink-600">Shipping/Pick Up</a></li>
                <li><a href="#" className="hover:text-pink-600">Store Policy</a></li>
                <li><a href="#" className="hover:text-pink-600">Contact Me</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">OPENING HOURS</h3>
              <ul className="space-y-2 text-sm">
                <li>Mon - Fri: 7am - 10pm</li>
                <li>Saturday: 8am - 10pm</li>
                <li>Sunday: 8am - 11pm</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">ADDRESS</h3>
              <p className="text-sm">
                500 Terry Francine Street<br />
                San Francisco, CA 94158<br />
                Tel: 123-456-7890
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">GET IT FRESH</h3>
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full p-2 border border-gray-300 mb-2"
              />
              <label className="flex items-center gap-2 text-sm mb-4">
                <input type="checkbox" />
                Yes, subscribe me to your newsletter
              </label>
              <button className="w-full bg-black text-white py-2 hover:bg-gray-800">
                SUBSCRIBE NOW
              </button>
              <div className="flex gap-4 mt-4">
                <Facebook className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
                <Instagram className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
                <Youtube className="w-5 h-5 hover:text-pink-600 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="text-center text-sm mt-12 pt-8 border-t border-gray-200">
            <p>&copy; 2024 by Puding Sehat. Powered and secured by Wix</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
