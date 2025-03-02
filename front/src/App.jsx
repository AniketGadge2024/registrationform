import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css'
const App = () => {

  const state = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];
  const district =[
    "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", 
  "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", 
  "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", 
  "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", 
  "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", 
  "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"
  ]

  const year=["2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"]


  const [values , setValues]=useState({
    name:'',
    fatherorhusband:'',
    mothername:'',

    address:'',
    TownorCity:'',
    PinCode:'',
    District:'',

    State:'',
    std:'',
    Tel:'',

    Mobile:'',
    email:'',

    Adharcard:'',
    dob:'',
    Gender:'',

    Nationality:'',
    OCIorPIO:'',
    applyfor:'',
    domicile:'',
    Religion:'',

    linguisticMinority:'',
    sscpassingyear:'',
    sscstate:'',
    ssclanguage:'',
    hscstate:'',
    hscDistrict:'',
    hscpassingyear:'',

    hscexamequivalent:'',
    hscRollNo:'',
    Reseravationstates:'',

    CasteValidity:'',
    certificateNumber:'',
    castcertificateDistrict:'',
    NonCreamyLayer:'',


  })

  const handleChange = (event)=>{
    setValues({...values,[event.target.name]:[event.target.value]})
  }


  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:3001/sql12765564', values)
    .then(res=>console.log("Registration Successfully !!"))
    .catch(err=>console.log(err));
  }

  return (
   <>
   
   <div className='  w-100   justify-content-center align-items-center Main'>
   <h3 className='title'>Registraion Form</h3>

<form onSubmit={handleSubmit}>
<div className='mb-3 sub-div'>
  <label htmlFor="name"><strong>Full name of Candidate</strong></label>
  <input type="text" name='name' className='form-control rounded-0' onChange={handleChange}/>
</div>

<div className='mb-3 sub-div'>
  <label htmlFor="fatherorhusband"><strong>Candidate's Father's Name / Husband's Name</strong></label>
  <input type="text" name='fatherorhusband' className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3 sub-div'>
  <label htmlFor="mothername"><strong>Candidate's Mother's Name</strong></label>
  <input type="text" name='mothername' className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3 sub-div'>
  <label htmlFor="address"><strong>Address for Communication/Correspondance </strong></label>
  <input type="text" name='address' className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3 sub-div'>
  <label htmlFor="TownorCity"><strong>Town/City</strong></label>
  <input type="text" name='TownorCity' className='form-control rounded-0' onChange={handleChange} />
  
  <label htmlFor="PinCode"><strong>PinCode</strong></label>
  <input type="number" name='PinCode' className='form-control rounded-0' onChange={handleChange} />
  
  <label htmlFor="District"><strong>District</strong></label>
  <input type="text" name='District' className='form-control rounded-0' onChange={handleChange} />
</div>



<div className='mb-3 sub-div thirddiv'>
<label htmlFor="State" className='labeldiv' > <strong>State</strong> </label>
        <select name="State" onChange={handleChange}>
       {state.map((state,index)=>(
          <option key={index} value={state}>{state}</option>
        ))}</select>
  
  <label htmlFor="std"><strong>STD Code</strong></label>
  <input type="number" name='std' className='form-control rounded-0' onChange={handleChange} />
  
  <label htmlFor="Tel"><strong>Tel. No</strong></label>
  <input type="number" name='Tel' className='form-control rounded-0' onChange={handleChange} />
</div>



<div className='mb-3 sub-div'>
  
  <label htmlFor="Mobile"><strong>Mobile Number</strong></label>
  <input type="number" name='Mobile' className='form-control rounded-0' onChange={handleChange} />
  
  <label htmlFor="email"><strong>E-Mail</strong></label>
  <input type="email" name='email' className='form-control rounded-0' onChange={handleChange} />
</div>

<div className='mb-3 sub-div'>
  
  <label htmlFor="Adharcard"><strong>Aadhar Card Number of the Candidate</strong></label>
  <input type="number" name='Adharcard' className='form-control rounded-0' onChange={handleChange} />
  
  <label htmlFor="dob"><strong>Date of Birth</strong></label>
  <input type="date" name='dob' className='form-control rounded-0' onChange={handleChange} />
 
  <label htmlFor="Gender"><strong>Gender</strong></label>
  <select name="Gender" onChange={handleChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Transgender">Transgender</option>
      </select>
</div>


<div className='mb-3 sub-div'>
<label htmlFor="Nationality" className='labeldiv' > <strong>Nationality</strong> </label>
        <div className='radiodiv'>
      <input type="radio" name='Nationality'value='Indian'onChange={handleChange} />Indian
      <input type="radio" name='Nationality'value='Foreigner' onChange={handleChange} />Foreigner
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="OCIorPIO" className='labeldiv' > <strong>I am OCI/PIO</strong> </label>
        <div className='radiodiv'> 
      <input type="radio" name='OCIorPIO'value='Yes'onChange={handleChange} />Yes
      <input type="radio" name='OCIorPIO'value='NO' onChange={handleChange} />No
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="applyfor" className='labeldiv' > <strong>I want to apply for</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='applyfor'value='State Quota'onChange={handleChange} />State Quota
      <input type="radio" name='applyfor'value='Institutional / NRI' onChange={handleChange} />Institutional / NRI
      <input type="radio" name='applyfor'value='Quota' onChange={handleChange} />Quota
      <input type="radio" name='applyfor'value='Both Quota' onChange={handleChange} />Both Quota
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="domicile" className='labeldiv' > <strong>Whether candidate is Domicile of Maharashtra State</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='domicile'value='Yes'onChange={handleChange} />Yes
      <input type="radio" name='domicile'value='NO' onChange={handleChange} />No
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="Religion" className='labeldiv' > <strong>Religion</strong> </label>
      <select name="Religion" onChange={handleChange}>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Buddhist">Buddhist</option>
        <option value="Jain">Jain</option>
        <option value="Others">Others</option>
      </select>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="linguisticMinority" className='labeldiv' > <strong>Does the Candidate want to claim linguistic Minority Quota in</strong> </label>
      <select name="linguisticMinority" onChange={handleChange}>
        <option value="Gujrati">Gujrati</option>
        <option value="Hindi">Hindi</option>
        <option value="Sindhi">Sindhi</option>
        <option value="None">None</option>
      </select>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="sscpassingyear" className='labeldiv' > <strong>SSC/10th or Equivalent Examination Year of passing </strong> </label>
     <select name="sscpassingyear" onChange={handleChange}>
      {year.map((year,index)=>(
      <option key={index} value={year}>{year}</option>
      ))}
     </select>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="sscstate" className='labeldiv' > <strong>State from which SSC/10th Equivalents Examination is Qualified</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='sscstate'value='Maharashtra'onChange={handleChange} />Maharashtra
      <input type="radio" name='sscstate'value='Outside Maharashtra' onChange={handleChange} />Outside Maharashtra
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="ssclanguage" className='labeldiv' > <strong>One of the languages SSC/10th or Equivalent</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='ssclanguage'value='Urdu'onChange={handleChange} />Urdu
      <input type="radio" name='ssclanguage'value='Arabic' onChange={handleChange} />Arabic
      <input type="radio" name='ssclanguage'value='Persian' onChange={handleChange} />Persian
      <input type="radio" name='ssclanguage'value='None' onChange={handleChange} />None
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="hscstate" className='labeldiv' > <strong>State of HSC/12th Std.Passing</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='hscstate'value='Maharashtra'onChange={handleChange} />Maharashtra
      <input type="radio" name='hscstate'value='Outside Maharashtra' onChange={handleChange} />Outside Maharashtra
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="hscDistrict" className='labeldiv' > <strong>District of HSC/12th Std.Passing</strong> </label>
      <select name="hscDistrict" onChange={handleChange}>
        {district.map((district,index)=>(
          <option key={index} value={district}>{district}</option>
        ))}
      </select>

      <label htmlFor="hscpassingyear" className='labeldiv' > <strong>District of HSC/12th Std.Passing</strong> </label>
        <select name="hscpassingyear" onChange={handleChange} >
        {year.map((year,index)=>(
          <option key={index} value={year}>{year}</option>
        ))}
        </select>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="hscexamequivalent" className='labeldiv' > <strong>HSC/12th Equivalent Examination</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='hscexamequivalent'value='PASS'onChange={handleChange} />PASS
      <input type="radio" name='hscexamequivalent'value='FAIL' onChange={handleChange} />FAIL
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="hscRollNo" className='labeldiv' > <strong>HSC/12th or Equivalent Examination Roll No./Seat No</strong> </label>
<input type="text" name='hscRollNo' className='form-control rounded-0 inputfield' onChange={handleChange} />
</div>

<div className='mb-3 sub-div'>
<label htmlFor="Reseravationstates" className='labeldiv' > <strong>Reservation states of the Candidates</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='Reseravationstates'value='SC'onChange={handleChange} />SC
      <input type="radio" name='Reseravationstates'value='ST'onChange={handleChange} />ST
      <input type="radio" name='Reseravationstates'value='DT-VJ(A)'onChange={handleChange} />DT-VJ A
      <input type="radio" name='Reseravationstates'value='NT1'onChange={handleChange} />NT1
      <input type="radio" name='Reseravationstates'value='NT2'onChange={handleChange} />NT2
      <input type="radio" name='Reseravationstates'value='NT3'onChange={handleChange} />NT3
      <input type="radio" name='Reseravationstates'value='OBC'onChange={handleChange} />OBC
      <input type="radio" name='Reseravationstates'value='SBC'onChange={handleChange} />SBC
      <input type="radio" name='Reseravationstates'value='EWS'onChange={handleChange} />EWS
      <input type="radio" name='Reseravationstates'value='OPEN'onChange={handleChange} />OPEN
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="CasteValidity" className='labeldiv' > <strong>Caste Validity / EWS Certificate</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='CasteValidity'value='YES'onChange={handleChange} />YES
      <input type="radio" name='CasteValidity'value='NO'onChange={handleChange} />NO
      <input type="radio" name='CasteValidity'value='APPLIED'onChange={handleChange} />APPLIED
      </div>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="certificateNumber" className='labeldiv' > <strong>Caste / EWS certificate Number</strong> </label>
<input type="text" name='certificateNumber' className='form-control rounded-0 inputfield' onChange={handleChange} />
</div>


<div className='mb-3 sub-div'>
<label htmlFor="castcertificateDistrict" className='labeldiv' > <strong>Caste / EWS certificate District</strong> </label>

<select name="castcertificateDistrict" onChange={handleChange}>
  {district.map((district,index)=>(
    <option key={index} value={district}>{district}</option>
  ))}
</select>
</div>

<div className='mb-3 sub-div'>
<label htmlFor="NonCreamyLayer" className='labeldiv' > <strong>Non Creamy Layer</strong> </label>
       <div className='radiodiv'> 
      <input type="radio" name='NonCreamyLayer'value='YES'onChange={handleChange} />YES
      <input type="radio" name='NonCreamyLayer'value='NO'onChange={handleChange} />NO
      </div>
</div>









<button type='submit' className='btn btn-success w-100 rounded-0'>Sign up</button>
</form>


    
</div>   
   </>
  )
}

export default App
