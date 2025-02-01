import { MapPin, Phone } from "lucide-react";

const Contacts = () => {
  return (
    <div className="bg-BG text-FC pl-10 pr-10 py-12 pt-20 pb-20">
      <section className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-400 mb-6">
          Have questions? Reach out to us - we're here to help!
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-red-500" />
              <span className="text-lg">Truskavets, Ukraine</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-red-500" />
              <span className="text-lg">+30976191692</span>
            </div>
          </div>

          {/* Embedded Map */}
          <iframe
            className="w-full md:w-2/3 h-64 rounded-lg"
            src="https://www.google.com/maps/embed/v1/place?q=Truskavets,Ukraine&key=AIzaSyCt1dO66aCx6xKRUu75qX_otiSNDEQlGIk"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
