import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-5 rounded-full translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-16 -translate-y-16"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              La próxima gran idea puede ser la tuya.
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Conversemos y hagámosla realidad en tiempo récord.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-16">
            <Link
              href="mailto:contacto@uniotechnologies.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Empieza tu proyecto con Unio
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-100">contacto@uniotechnologies.com</p>
            </div>
            
            {/* Phone */}
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Teléfono</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            
            {/* Response Time */}
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Respuesta</h3>
              <p className="text-blue-100">En menos de 24 horas</p>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-blue-500 border-opacity-30">
            <p className="text-blue-100 text-sm">
              ¿Tienes una idea? ¿Un problema que resolver? ¿Un sueño digital que hacer realidad?
            </p>
            <p className="text-white font-medium mt-2">
              Estamos aquí para convertirlo en una solución extraordinaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;