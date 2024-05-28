import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/pages/Authentication/SignIn';
import Register from './components/pages/Authentication/Register';
import Home from './components/pages/Home/Home';
import JobDetails from './components/pages/JobInfo/JobDetails';
import AddJobs from './components/pages/AddJobs/AddJobs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails/>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<AddJobs />} />
        <Route path="/edit/:id" element={<AddJobs />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
