import { useState } from 'react';

export function SearchForm() {
  const [localizacao, setLocalizacao] = useState('Perto de você');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adultos, setAdultos] = useState('2');
  const [criancas, setCriancas] = useState('0');

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ localizacao, checkIn, checkOut, adultos, criancas });
  }

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      {/* Título e Subtítulo */}
      <h2 className="text-3xl font-extrabold text-black leading-tight tracking-tight mb-2">
        Encontre lugares para ficar no Airbnb
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Descubra espaços inteiros e quartos privativos perfeitos para todas as viagens.
      </p>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        
        {/* Campo: Localização */}
        <div className="border border-black rounded-2xl p-3 focus-within:ring-2 focus-within:ring-black">
          <label htmlFor="location" className="block text-xs font-bold text-black uppercase tracking-wider">
            Localização
          </label>
          <input
            id="location"
            type="text"
            value={localizacao}
            onChange={(e) => setLocalizacao(e.target.value)}
            placeholder="Para onde você vai?"
            className="w-full text-sm text-gray-700 font-medium focus:outline-none bg-transparent"
          />
        </div>

        {/* Grupo: Check-in / Checkout */}
        <div className="grid grid-cols-2 border border-gray-300 rounded-2xl divide-x divide-gray-200 focus-within:ring-2 focus-within:ring-black">
          <div className="p-3">
            <label htmlFor="checkin" className="block text-xs font-bold text-black">
              Check-in
            </label>
            <input
              id="checkin"
              type="text"
              placeholder="Insira as datas"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm text-gray-500 focus:outline-none bg-transparent placeholder-gray-400"
            />
          </div>
          <div className="p-3">
            <label htmlFor="checkout" className="block text-xs font-bold text-black">
              Checkout
            </label>
            <input
              id="checkout"
              type="text"
              placeholder="Insira as datas"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm text-gray-500 focus:outline-none bg-transparent placeholder-gray-400"
            />
          </div>
        </div>

        {/* Grupo: Hóspedes (Adultos / Crianças) */}
        <div className="grid grid-cols-2 border border-gray-300 rounded-2xl divide-x divide-gray-200 focus-within:ring-2 focus-within:ring-black">
          <div className="p-3">
            <label htmlFor="adults" className="block text-xs font-bold text-black">
              Adultos
            </label>
            <select
              id="adults"
              value={adultos}
              onChange={(e) => setAdultos(e.target.value)}
              className="w-full text-sm text-gray-800 font-medium focus:outline-none bg-transparent cursor-pointer"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="p-3">
            <label htmlFor="children" className="block text-xs font-bold text-black">
              Crianças
            </label>
            <select
              id="children"
              value={criancas}
              onChange={(e) => setCriancas(e.target.value)}
              className="w-full text-sm text-gray-800 font-medium focus:outline-none bg-transparent cursor-pointer"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3+</option>
            </select>
          </div>
        </div>

        {/* Botão Buscar */}
        <button
          type="submit"
          className="mt-2 w-full bg-[#E80057] hover:bg-[#d0004e] text-white font-semibold py-3.5 rounded-xl transition-colors text-base cursor-pointer shadow-md active:scale-[0.99]"
        >
          Buscar
        </button>
      </form>
    </div>
  );
}