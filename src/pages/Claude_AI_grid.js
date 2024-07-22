import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button, Icon, Block } from "../components/Component";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import LogoDark from "../images/logo-dark2x.png";
import { invoiceData } from "./pre-built/invoice/Invoice";



import { Search, User, Info, Mail } from 'lucide-react';

const movieData = [
  { id: 1, title: "Tyrant's Blessing", rating: 4, price: "$9.99 - $29.99", image: "https://cms.mypancho.com/websites/wp-content/uploads/sites/2/2023/07/theri-therapist-website.jpg?text=Tyrant's+Blessing" },
  { id: 2, title: "Asterigos: Curse of the Stars", rating: 4, price: "$24.25 - $39.99", image: "https://cms.mypancho.com/websites/wp-content/uploads/sites/2/2023/07/theri-therapist-website.jpg?text=Asterigos" },
  { id: 3, title: "TUNIC", rating: 4, price: "$29.99 - $39.99", image: "https://via.placeholder.com/200x300.png?text=TUNIC" },
  { id: 4, title: "The Lord of the Rings: Gollum", rating: 4, price: "$49.99 - $59.99", image: "https://via.placeholder.com/200x300.png?text=LOTR:+Gollum" },
  { id: 5, title: "Starfield", rating: 0, price: "$69.99 - $79.99", image: "https://via.placeholder.com/200x300.png?text=Starfield" },
  { id: 6, title: "Borderlands 3", rating: 5, price: "$59.99 - $69.99", image: "https://via.placeholder.com/200x300.png?text=Borderlands+3", soldOut: true },
  { id: 7, title: "Everspace 2", rating: 0, price: "$49.99 - $59.99", image: "https://via.placeholder.com/200x300.png?text=Everspace+2", isNew: true, isHot: true },
  { id: 8, title: "Horizon Forbidden West", rating: 5, price: "Select Options", image: "https://cms.mypancho.com/websites/wp-content/uploads/sites/2/2023/07/theri-therapist-website.jpg?text=Horizon+Forbidden+West", soldOut: true, isHot: true },
];

const MovieCard = ({ movie, onClick }) => (
  <div style={{
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  }} onClick={() => onClick(movie)}>
    <div style={{ position: 'relative' }}>
      <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      {movie.soldOut && <span style={{
        position: 'absolute',
        top: '8px',
        left: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '4px'
      }}>SOLD OUT</span>}
      {movie.isNew && <span style={{
        position: 'absolute',
        top: '8px',
        left: '8px',
        backgroundColor: 'rgba(59, 130, 246, 0.9)',
        color: 'white',
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '4px'
      }}>NEW</span>}
      {movie.isHot && <span style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        backgroundColor: 'rgba(220, 38, 38, 0.9)',
        color: 'white',
        padding: '4px 8px',
        fontSize: '12px',
        borderRadius: '4px'
      }}>HOT</span>}
    </div>
    <div style={{ padding: '12px' }}>
      <h3 style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '4px', color: '#1F2937' }}>{movie.title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} style={{ width: '12px', height: '12px', color: i < movie.rating ? '#FBBF24' : '#D1D5DB' }} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p style={{ color: '#8E44AD', fontWeight: '600', fontSize: '12px' }}>{movie.price} /Per Month</p>
    </div>
  </div>
);

const FilterSection = ({ title, children }) => (
  <div style={{ marginBottom: '16px' }}>
    <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#1F2937' }}>{title}</h2>
    {children}
  </div>
);
const DetailsPane = ({ movie }) => (
  <div style={{
    backgroundColor: 'white',
    padding: '24px',
    height: '100%',
    borderRadius: '0',
  }}>
    <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#1F2937' }}>{movie.title}</h2>
    <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '16px', borderRadius: '8px' }} />
    <p style={{ fontSize: '16px', fontWeight: '600', color: '#8E44AD', marginBottom: '16px' }}>{movie.price} /Per Month</p>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} style={{ width: '20px', height: '20px', color: i < movie.rating ? '#FBBF24' : '#D1D5DB' }} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <button style={{
      backgroundColor: '#8E44AD',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '9999px',
      width: '100%',
      marginBottom: '16px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600'
    }}>Add to Cart</button>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
      <button style={{ display: 'flex', alignItems: 'center', color: '#4B5563', border: 'none', background: 'none', cursor: 'pointer', fontSize: '12px' }}><User style={{ marginRight: '4px' }} size={16} /> Customer</button>
      <button style={{ display: 'flex', alignItems: 'center', color: '#4B5563', border: 'none', background: 'none', cursor: 'pointer', fontSize: '12px' }}><Info style={{ marginRight: '4px' }} size={16} /> Support</button>
      <button style={{ display: 'flex', alignItems: 'center', color: '#4B5563', border: 'none', background: 'none', cursor: 'pointer', fontSize: '12px' }}><Mail style={{ marginRight: '4px' }} size={16} /> Email</button>
    </div>
    <p style={{ color: '#4B5563', fontSize: '12px', lineHeight: '1.5' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
);

const GriderApp = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div style={{ display: 'flex', backgroundColor: 'white', minHeight: '100vh' }}>
      <div style={{
        width: '20%',
        padding: '20px',
        backgroundColor: '#F3F4F6',
        borderRight: '1px solid #E5E7EB',
      }}>
        <FilterSection title="Price">
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            style={{ width: '100%', marginBottom: '8px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#4B5563', marginBottom: '16px' }}>
            <span>Price: ${priceRange[0]} - ${priceRange[1]}</span>
            <button style={{ color: '#8E44AD', fontWeight: '600', border: 'none', background: 'none', cursor: 'pointer' }}>Filter</button>
          </div>
        </FilterSection>

        <FilterSection title="Deployment">
          <select style={{ width: '100%', padding: '6px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '12px' }}>
            <option>Any Deployment Mode</option>
          </select>
        </FilterSection>

        <FilterSection title="Responsiveness">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <input type="checkbox" id="desktop" style={{ marginRight: '8px' }} />
            <label htmlFor="desktop" style={{ color: '#4B5563', fontSize: '12px' }}>Desktop Responsiveness</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="mobile" style={{ marginRight: '8px' }} />
            <label htmlFor="mobile" style={{ color: '#4B5563', fontSize: '12px' }}>Mobile Responsive</label>
          </div>
        </FilterSection>

        <FilterSection title="Compatible Browsers">
          <select style={{ width: '100%', padding: '6px', border: '1px solid #D1D5DB', borderRadius: '4px', fontSize: '12px' }}>
            <option>Any Compatible Browsers</option>
          </select>
        </FilterSection>

        <FilterSection title="Operating System">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <input type="checkbox" id="ubuntu24" style={{ marginRight: '8px' }} />
            <label htmlFor="ubuntu24" style={{ color: '#4B5563', fontSize: '12px' }}>Ubuntu Version 24</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="ubuntu22" style={{ marginRight: '8px' }} />
            <label htmlFor="ubuntu22" style={{ color: '#4B5563', fontSize: '12px' }}>Ubuntu Version 22</label>
          </div>
        </FilterSection>

        <FilterSection title="License Type">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <input type="checkbox" id="openSource" style={{ marginRight: '8px' }} />
            <label htmlFor="openSource" style={{ color: '#4B5563', fontSize: '12px' }}>Open Source</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="proprietary" style={{ marginRight: '8px' }} />
            <label htmlFor="proprietary" style={{ color: '#4B5563', fontSize: '12px' }}>Proprietary</label>
          </div>
        </FilterSection>
      </div>

      <div style={{ width: '60%', padding: '20px' }}>
        <div style={{ marginBottom: '20px', position: 'relative' }}>
          <input
            type="text"
            placeholder="Search websites..."
            style={{
              width: '100%',
              padding: '10px',
              paddingLeft: '40px',
              border: '1px solid #D1D5DB',
              borderRadius: '9999px',
              fontSize: '14px'
            }}
          />
          <Search style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} size={16} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {movieData.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={setSelectedMovie} />
          ))}
        </div>
      </div>

      <div style={{ width: '20%', borderLeft: '1px solid #E5E7EB' }}>
        {selectedMovie && <DetailsPane movie={selectedMovie} />}
      </div>
    </div>
  );
};

export default GriderApp;