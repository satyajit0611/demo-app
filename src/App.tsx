import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <Link to="/home">Home</Link>
    </div>
  );
}
