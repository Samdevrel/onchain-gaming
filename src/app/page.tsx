'use client';

import { useState } from 'react';

interface Game {
  id: string;
  name: string;
  category: string;
  chain: string;
  players: string;
  earnings24h: string;
  token: string;
  rating: number;
}

interface PlayerStats {
  totalEarnings: string;
  gamesPlayed: number;
  nftsOwned: number;
  rank: string;
}

const games: Game[] = [
  { id: '1', name: 'Splinterlands', category: 'Card Game', chain: 'Hive', players: '2.4M', earnings24h: '$890K', token: 'SPS', rating: 4.8 },
  { id: '2', name: 'Axie Infinity', category: 'Battle', chain: 'Ronin', players: '1.8M', earnings24h: '$1.2M', token: 'AXS', rating: 4.5 },
  { id: '3', name: 'Gods Unchained', category: 'Card Game', chain: 'Immutable X', players: '980K', earnings24h: '$420K', token: 'GODS', rating: 4.6 },
  { id: '4', name: 'The Sandbox', category: 'Metaverse', chain: 'Ethereum', players: '3.2M', earnings24h: '$680K', token: 'SAND', rating: 4.3 },
  { id: '5', name: 'Illuvium', category: 'RPG', chain: 'Immutable X', players: '450K', earnings24h: '$320K', token: 'ILV', rating: 4.7 },
  { id: '6', name: 'Blum', category: 'Tap-to-Earn', chain: 'Telegram', players: '8.5M', earnings24h: '$2.1M', token: 'BLUM', rating: 4.2 },
];

const playerStats: PlayerStats = {
  totalEarnings: '$4,250',
  gamesPlayed: 12,
  nftsOwned: 45,
  rank: 'Diamond',
};

const categories = ['All', 'Card Game', 'Battle', 'Metaverse', 'RPG', 'Tap-to-Earn'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = selectedCategory === 'All'
    ? games
    : games.filter(g => g.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-violet-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Onchain Gaming</h1>
          <p className="text-gray-400 mt-2">Play-to-Earn games with real crypto rewards</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Player Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-violet-400 p-4 text-center">
            <div className="text-3xl font-black text-violet-400">{playerStats.totalEarnings}</div>
            <div className="text-sm text-gray-400">Total Earnings</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">{playerStats.gamesPlayed}</div>
            <div className="text-sm text-gray-400">Games Played</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">{playerStats.nftsOwned}</div>
            <div className="text-sm text-gray-400">NFTs Owned</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-yellow-400">{playerStats.rank}</div>
            <div className="text-sm text-gray-400">Rank</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-violet-500 border-violet-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Games Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => setSelectedGame(game)}
              className={`bg-gray-900 border-4 cursor-pointer transition-all hover:border-violet-400 ${
                selectedGame?.id === game.id ? 'border-violet-400 bg-violet-900/20' : 'border-gray-700'
              }`}
            >
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-violet-400 text-lg">{game.name}</h3>
                    <span className="px-2 py-1 text-xs font-bold bg-gray-800 text-gray-400">
                      {game.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-400">{game.earnings24h}</div>
                    <div className="text-xs text-gray-500">24h earnings</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                  <div className="p-2 bg-gray-800 border border-gray-700">
                    <span className="text-gray-500">Chain</span>
                    <div className="font-bold">{game.chain}</div>
                  </div>
                  <div className="p-2 bg-gray-800 border border-gray-700">
                    <span className="text-gray-500">Players</span>
                    <div className="font-bold">{game.players}</div>
                  </div>
                  <div className="p-2 bg-gray-800 border border-gray-700">
                    <span className="text-gray-500">Token</span>
                    <div className="font-bold text-violet-400">{game.token}</div>
                  </div>
                  <div className="p-2 bg-gray-800 border border-gray-700">
                    <span className="text-gray-500">Rating</span>
                    <div className="font-bold text-yellow-400">⭐ {game.rating}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Selected Game */}
        {selectedGame && (
          <section className="bg-gray-900 border-4 border-violet-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-violet-400">{selectedGame.name}</h2>
                <p className="text-sm text-gray-400">{selectedGame.category} • {selectedGame.chain}</p>
              </div>
              <button
                onClick={() => setSelectedGame(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Players</div>
                <div className="text-2xl font-bold">{selectedGame.players}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">24h Earnings</div>
                <div className="text-2xl font-bold text-green-400">{selectedGame.earnings24h}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Token</div>
                <div className="text-2xl font-bold text-violet-400">{selectedGame.token}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Rating</div>
                <div className="text-2xl font-bold text-yellow-400">⭐ {selectedGame.rating}</div>
              </div>
            </div>

            <button className="w-full py-4 bg-violet-500 text-white font-bold border-4 border-violet-400 hover:bg-violet-400">
              Play {selectedGame.name}
            </button>
          </section>
        )}

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Onchain Gaming Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-violet-400 mb-2">Choose Game</h3>
              <p className="text-xs text-gray-400">Pick a play-to-earn game</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Play & Earn</h3>
              <p className="text-xs text-gray-400">Complete quests, win battles</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Collect NFTs</h3>
              <p className="text-xs text-gray-400">Own in-game assets</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-yellow-400 mb-2">Trade & Sell</h3>
              <p className="text-xs text-gray-400">Convert to real crypto</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-violet-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
