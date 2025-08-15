const Presentation = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            <span className="text-blue-600">Unio:</span> Fábrica de software impulsada por IA, guiada por personas
          </h2>
          
          {/* Description */}
          <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
            <p>
              En Unio, diseñamos y desarrollamos productos digitales que conectan personas, servicios e ideas.
            </p>
            
            <p>
              Desde una web corporativa hasta aplicaciones móviles y sistemas internos certificados en ISO 9001, nuestro compromiso es entregar soluciones rápidas, escalables y seguras, con la inteligencia artificial como aliada y el ingenio humano como líder.
            </p>
          </div>
          
          {/* Visual Elements */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Icon */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">IA Avanzada</h3>
              <p className="text-sm text-gray-600 text-center">Tecnología que acelera el desarrollo</p>
            </div>
            
            {/* Human Icon */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Toque Humano</h3>
              <p className="text-sm text-gray-600 text-center">Creatividad y empatía en cada proyecto</p>
            </div>
            
            {/* Quality Icon */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">ISO 9001</h3>
              <p className="text-sm text-gray-600 text-center">Calidad certificada internacionalmente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;