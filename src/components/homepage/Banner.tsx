import React from 'react';

const Banner = () => {
    return (

<section className=" py-6">

<div className="grid grid-cols-1>

 bg-slate-400 rounded-4xl p-12 md:grid-cols-2 mt-8 w-[90%] mx-auto gap-4 items-center">



<div className="space-y-4 text-center md:text-left">

<h1 className="font-bold text-3xl">

 Books to freshen up
<br />
your bookshelf

 </h1>

<button className="btn btn-success">

 View The List

</button>
</div>
<div className="flex justify-center md\:justify-end">

<img src="/hero.jpg" alt="banner" />

</div>

</div>

</section>

 );

};  
  
    
export default Banner;