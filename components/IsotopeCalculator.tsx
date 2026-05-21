'use client'

import React, { useState } from 'react'
import { Search, Hash, ArrowRight, Atom } from 'lucide-react'
import { getIsotopeDetails, IsotopeResult, parseIsotopeInput, getKnownIsotopesForElement, ELEMENT_NAMES, ELEMENT_SYMBOLS } from '@/lib/chemistry'

const IsotopeCard = ({ result }: { result: IsotopeResult }) => {
  const isStable = result.stability.toLowerCase().includes("stabil")

  return (
    <div className="bg-white border border-[#374151]/10 rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start shadow-sm transition-all hover:border-[#10203D]/20">
      {/* Identity Block */}
      <div className="min-w-[140px] flex md:flex-col items-center md:items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-[#F9FAFB] border border-[#374151]/10 flex items-center justify-center relative flex-shrink-0">
           <span className="absolute top-1 left-1.5 text-[8px] text-[#6B7280] font-bold">{result.mass}</span>
           <span className="text-xl font-bold text-[#10203D]">{result.symbol}</span>
        </div>
        <div>
          <div className="text-lg font-black text-[#10203D] leading-tight font-outfit">{result.isotopeName.split(' / ')[0]}</div>
          <div className="text-[10px] text-[#6B7280] uppercase tracking-widest font-bold">{result.elementName}</div>
        </div>
      </div>

      {/* Stability Information */}
      <div className="min-w-[220px] space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] text-[#6B7280] uppercase font-bold tracking-tighter">Statusi i Stabilitetit</span>
          <div>
            <span className={`text-sm font-black uppercase tracking-tight ${isStable ? 'text-emerald-700' : 'text-rose-700'}`}>
              {result.stability}
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <span className="text-[10px] text-[#6B7280] uppercase font-bold tracking-tighter">Përbërja Atomike</span>
          <div className="flex flex-wrap gap-3">
            <div className="bg-[#F9FAFB] border border-[#374151]/10 px-3 py-1.5 rounded-lg flex items-center">
              <span className="text-[10px] text-[#6B7280] mr-2 font-bold">Protonet:</span>
              <span className="text-sm font-bold text-[#10203D]">{result.z}</span>
            </div>
            <div className="bg-[#F9FAFB] border border-[#374151]/10 px-3 py-1.5 rounded-lg flex items-center">
              <span className="text-[10px] text-[#6B7280] mr-2 font-bold">Neutronet:</span>
              <span className="text-sm font-bold text-[#10203D]">{result.n}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Information */}
      <div className="flex-1 space-y-1 border-t md:border-t-0 md:border-l border-[#374151]/5 pt-4 md:pt-0 md:pl-8">
        <span className="text-[10px] text-[#6B7280] uppercase font-bold tracking-tighter">Përdorimet & Aplikimet</span>
        <p className="text-sm text-[#374151] leading-relaxed max-w-prose line-clamp-4">
          {result.uses}
        </p>
      </div>
    </div>
  )
}

export default function IsotopeCalculator() {
  const [searchMode, setSearchMode] = useState<'zn' | 'name'>('name')
  
  const [nameInput, setNameInput] = useState<string>('')
  const [protons, setProtons] = useState<string>('6')
  const [neutrons, setNeutrons] = useState<string>('8')

  const [resultsList, setResultsList] = useState<IsotopeResult[]>([])
  const [elementNameSearched, setElementNameSearched] = useState<{ name: string, symbol: string } | null>(null)
  
  const [isCalculated, setIsCalculated] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg(null)
    
    let nextResults: IsotopeResult[] = []
    let nextElementNameSearched: { name: string, symbol: string } | null = null

    if (searchMode === 'name') {
      const parsed = parseIsotopeInput(nameInput)
      if (!parsed) {
        setErrorMsg("Formati i emrit është i pavlefshëm.")
        setIsCalculated(false)
        return
      }

      const z = parsed.z
      if (parsed.type === 'element') {
        const found = getKnownIsotopesForElement(z)
        if (found.length === 0) {
          setErrorMsg(`Nuk u gjetën izotope.`)
          setIsCalculated(false)
          return
        }
        nextResults = found
        nextElementNameSearched = { name: ELEMENT_NAMES[z - 1], symbol: ELEMENT_SYMBOLS[z - 1] }
      } else {
        nextResults = [getIsotopeDetails(z, parsed.n)]
      }
    } else {
      const p = parseInt(protons, 10)
      const n = parseInt(neutrons, 10)
      nextResults = [getIsotopeDetails(p, n)]
    }

    setResultsList(nextResults)
    setElementNameSearched(nextElementNameSearched)
    setIsCalculated(true)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 pb-24 font-sans">
      {/* Search Module */}
      <div className="bg-white border-y md:border border-[#374151]/10 md:rounded-3xl p-6 md:p-10 shadow-xl shadow-[#10203D]/5">
        <div className="flex flex-col gap-8">
          <div className="flex bg-[#F9FAFB] p-1.5 rounded-2xl self-start border border-[#374151]/10">
            <button
              type="button"
              onClick={() => { setSearchMode('name'); setErrorMsg(null); }}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase transition-all ${searchMode === 'name' ? 'bg-[#10203D] text-white shadow-md' : 'text-[#6B7280] hover:text-[#10203D]'}`}
            >
              <Search className="w-3 h-3 inline mr-2" />
              Sipas Emrit
            </button>
            <button
              type="button"
              onClick={() => { setSearchMode('zn'); setErrorMsg(null); }}
              className={`px-6 py-2 rounded-xl text-xs font-bold uppercase transition-all ${searchMode === 'zn' ? 'bg-[#10203D] text-white shadow-md' : 'text-[#6B7280] hover:text-[#10203D]'}`}
            >
              <Hash className="w-3 h-3 inline mr-2" />
              Sipas Strukturës
            </button>
          </div>

          <form onSubmit={handleCalculate} className="flex flex-col md:flex-row gap-4 items-end">
            {searchMode === 'name' ? (
              <div className="flex-1 space-y-2 w-full">
                <label className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest pl-1">Emri i Elementit</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full bg-[#F9FAFB] border border-[#374151]/10 rounded-2xl px-6 py-4 text-[#10203D] focus:outline-none focus:ring-4 focus:ring-[#10203D]/5 focus:border-[#10203D]/30 transition-all placeholder:text-[#6B7280]/40"
                  placeholder="p.sh. Karbon..."
                  required
                />
              </div>
            ) : (
              <div className="flex-1 flex flex-col md:flex-row gap-4 w-full">
                <div className="flex-1 space-y-2 w-full">
                  <label className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest pl-1">Protone (Z)</label>
                  <input
                    type="number"
                    value={protons}
                    onChange={(e) => setProtons(e.target.value)}
                    className="w-full bg-[#F9FAFB] border border-[#374151]/10 rounded-2xl px-6 py-4 text-[#10203D] focus:outline-none focus:ring-4 focus:ring-[#10203D]/5 focus:border-[#10203D]/30"
                    required
                  />
                </div>
                <div className="flex-1 space-y-2 w-full">
                  <label className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest pl-1">Neutrone (N)</label>
                  <input
                    type="number"
                    value={neutrons}
                    onChange={(e) => setNeutrons(e.target.value)}
                    className="w-full bg-[#F9FAFB] border border-[#374151]/10 rounded-2xl px-6 py-4 text-[#10203D] focus:outline-none focus:ring-4 focus:ring-[#10203D]/5 focus:border-[#10203D]/30"
                    required
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full md:w-auto bg-[#10203D] hover:bg-[#10203D]/90 text-white font-black px-12 py-4 rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-[#10203D]/20 uppercase text-xs tracking-widest"
            >
              Analizo
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {errorMsg && (
            <div className="text-rose-700 text-xs font-bold border border-rose-100 bg-rose-50 px-6 py-4 rounded-2xl">
              {errorMsg}
            </div>
          )}
        </div>
      </div>

      {/* Results Header */}
      {isCalculated && resultsList.length > 0 && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {elementNameSearched && (
            <div className="flex items-center gap-3 px-2 border-b border-[#374151]/5 pb-4">
              <Atom className="w-5 h-5 text-[#6B7280]/40" />
              <h2 className="text-sm font-black text-[#10203D] uppercase tracking-widest font-outfit">
                Rezultatet: {elementNameSearched.name} ({resultsList.length})
              </h2>
            </div>
          )}

          <div className="flex flex-col gap-6">
            {resultsList.map((res) => (
              <IsotopeCard key={`${res.z}-${res.n}`} result={res} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
