import React, {  useState } from "react"
import './App.css';
import './selfcss/tailwindcsslearn.css';
import './selfcss/tailwindcsslearn.js';
import classNames from "classnames";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineClose } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import styles from "./App.module.css";



function App() {
  const[curColor,setCurColor]=useState("#FF9933");
  const[curPos,setCurPos]=useState('');
  const[rValue,setRValue]=useState(0);
  const[gValue,setGValue]=useState(0);
  const[bValue,setBValue]=useState(0);
  const alertHello=(e)=>{}
  const notify = () =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          styles.notificationWrapper,
          t.visible ? "top-0" : "-top-96",
        ])}
      >
        <div className={styles.iconWrapper}>
          <HiLightningBolt />
        </div>
        <div className={styles.contentWrapper}>
          <h1>New version available</h1>
          <p>
            An improved version of VESSEL is now available, refresh to update.
          </p>
        </div>
        <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: "unique-notification", position: "top-center" }
  );
  function mouseOutMap(){} 
  function mouseOverColor(a){
    setCurColor(a);
    setRValue(parseInt(a.substring(1,3),16));
    setGValue(parseInt(a.substring(3,5),16));
    setBValue(parseInt(a.substring(5,7),16));  
  } 
  function clickColor(a,seltop,selleft){
    setCurColor(a);
    if ((parseInt(seltop)+200)>-1 && parseInt(selleft)>-1) {
      document.getElementById("selectedhexagon").style.top=seltop + "px";
      document.getElementById("selectedhexagon").style.left=selleft + "px";
      document.getElementById("selectedhexagon").style.visibility="visible";
    }
    else {
      document.getElementById("selectedhexagon").style.visibility = "hidden";
      setCurPos('invisible');
    }
  }
  function rchange(event){
    let length=0;
    if(event){
      length=event.target.value.length
    }
    return length;
  }
  function gchange(event){
    let length=0;
    if(event){
      length=event.target.value.length
    }
    return length;
  }
  function bchange(event){
    let length=0;
    if(event){
      length=event.target.value.length
    }
    return length;
  }
  return (
    <div className=" max-w-lg mx-auto">{/*p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 */}
    <div >
      <p className="text-slate-500 tracking-tight">Card</p>
      <figure className="bg-right bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  p-[6px_0_0_16px] shadow-[0_35px_50px_-15px_rgba(0,0,0,0.3)] shadow-slate-900" >{/*md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800*/} 
        <p className="pl-30 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500">{/*text-lg font-medium*/}
          Honey Bee
        </p>
        <p className=" text-base p-[6px_0_0_6px]">{/*text-lg font-medium*/}
          He's from Argentina.
        </p>
        <div className="p-[6px_0_0_6px] pt-2">
          <img className="float-left rounded-full" src="/img/img_avatar3.png" alt="" width="80" height="100"/>{/*w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto*/} 
          <div className="p-[0_6px_0_6px]">{/* pt-6 md:p-8 text-center md:text-left space-y-4*/}
            <p className="text-lg font-medium">{/**/}
                Tailwind CSS is the best framework.It is atteched to create react app project.
            </p>  
            <p className="text-lg font-medium">{/**/}
                This is the most magnificant. 
            </p>             
          </div>
        </div>
        <div className="pt-6 text-center">
          <p className="pb-2 font-['Ink Free'] text-lg">{/*text-lg font-medium*/}
              This Card means that owner is a member of commit. 
          </p>
        </div>
      </figure>
    </div>
    <div className="pt-20">
      <p className="text-slate-500 tracking-tight">Button</p>
      <div className="flex justify-center">
        <img className="float-left mr-3 hover:z-4000" src="/img/buttons_PNG186.png" alt="" width="80" height="100"/>
        <button className='p-[3px_10px_3px_10px]  hover:bg-gray-300 border-solid border-2  border-indigo-600'>Go Tailwind</button>
        <button className='bg-sky-500/100 rounded-lg hover:bg-gray-300 ml-3 p-[3px_10px_3px_10px] '>Go Tailwind</button>
        <button className='bg-slate-600 rounded-full hover:bg-gray-300 ml-3 p-[3px_10px_3px_10px] '>Go Tailwind</button>
      </div>
    </div>
    <div className="pt-20">
      <button className="text-slate-500 tracking-tight" onClick={notify}>Notify</button>
      <Toaster />
    </div> 
    <div className="pt-20">
      <p className="text-slate-500 tracking-tight">Pick Color</p>
      <div  className="basis-28">
        <img className="mr-2" src="/img/img_colormap.gif" alt="Workplace" useMap="#colormap" />
        <div id='selectedhexagon' style={{visibility:'hidden',position:'relative',width:'21px',height:'21px'}}>
          <p>{curPos}</p>
          <img   src="/img/img_selectedcolor.gif" alt="" />
        </div>
        <div id='divpreview'>&nbsp;</div>
        <map   id='colormap' onMouseOut={mouseOutMap} name='colormap' >
          <area    shape='poly' coords='63,0,72,4,72,15,63,19,54,15,54,4' onClick={(e)=>clickColor("#003366",-200,54)} onMouseOver={(e)=>mouseOverColor("#003366")} alt='#003366' />
          <area    shape='poly' coords='81,0,90,4,90,15,81,19,72,15,72,4' onClick={(e)=>clickColor("#336699",-200,72)} onMouseOver={(e)=>mouseOverColor("#336699")} alt='#336699' />
          <area    shape='poly' coords='99,0,108,4,108,15,99,19,90,15,90,4' onClick={(e)=>clickColor("#3366CC",-200,90)} onMouseOver={(e)=>mouseOverColor("#3366CC")} alt='#3366CC' />
          <area    shape='poly' coords='117,0,126,4,126,15,117,19,108,15,108,4' onClick={(e)=>clickColor("#003399",-200,108)} onMouseOver={(e)=>mouseOverColor("#003399")} alt='#003399' />
          <area    shape='poly' coords='135,0,144,4,144,15,135,19,126,15,126,4' onClick={(e)=>clickColor("#000099",-200,126)} onMouseOver={(e)=>mouseOverColor("#000099")} alt='#000099' />
          <area    shape='poly' coords='153,0,162,4,162,15,153,19,144,15,144,4' onClick={(e)=>clickColor("#0000CC",-200,144)} onMouseOver={(e)=>mouseOverColor("#0000CC")} alt='#0000CC' />
          <area    shape='poly' coords='171,0,180,4,180,15,171,19,162,15,162,4' onClick={(e)=>clickColor("#000066",-200,162)} onMouseOver={(e)=>mouseOverColor("#000066")} alt='#000066' />
          <area    shape='poly' coords='54,15,63,19,63,30,54,34,45,30,45,19' onClick={(e)=>clickColor("#006666",-185,45)} onMouseOver={(e)=>mouseOverColor("#006666")} alt='#006666' />
          <area    shape='poly' coords='72,15,81,19,81,30,72,34,63,30,63,19' onClick={(e)=>clickColor("#006699",-185,63)} onMouseOver={(e)=>mouseOverColor("#006699")} alt='#006699' />
          <area    shape='poly' coords='90,15,99,19,99,30,90,34,81,30,81,19' onClick={(e)=>clickColor("#0099CC",-185,81)} onMouseOver={(e)=>mouseOverColor("#0099CC")} alt='#0099CC' />
          <area    shape='poly' coords='108,15,117,19,117,30,108,34,99,30,99,19' onClick={(e)=>clickColor("#0066CC",-185,99)} onMouseOver={(e)=>mouseOverColor("#0066CC")} alt='#0066CC' />
          <area    shape='poly' coords='126,15,135,19,135,30,126,34,117,30,117,19' onClick={(e)=>clickColor("#0033CC",-185,117)} onMouseOver={(e)=>mouseOverColor("#0033CC")} alt='#0033CC' />
          <area    shape='poly' coords='144,15,153,19,153,30,144,34,135,30,135,19' onClick={(e)=>clickColor("#0000FF",-185,135)} onMouseOver={(e)=>mouseOverColor("#0000FF")} alt='#0000FF' />
          <area    shape='poly' coords='162,15,171,19,171,30,162,34,153,30,153,19' onClick={(e)=>clickColor("#3333FF",-185,153)} onMouseOver={(e)=>mouseOverColor("#3333FF")} alt='#3333FF' />
          <area    shape='poly' coords='180,15,189,19,189,30,180,34,171,30,171,19' onClick={(e)=>clickColor("#333399",-185,171)} onMouseOver={(e)=>mouseOverColor("#333399")} alt='#333399' />
          <area    shape='poly' coords='45,30,54,34,54,45,45,49,36,45,36,34' onClick={(e)=>clickColor("#669999",-170,36)} onMouseOver={(e)=>mouseOverColor("#669999")} alt='#669999' />
          <area    shape='poly' coords='63,30,72,34,72,45,63,49,54,45,54,34' onClick={(e)=>clickColor("#009999",-170,54)} onMouseOver={(e)=>mouseOverColor("#009999")} alt='#009999' />
          <area    shape='poly' coords='81,30,90,34,90,45,81,49,72,45,72,34' onClick={(e)=>clickColor("#33CCCC",-170,72)} onMouseOver={(e)=>mouseOverColor("#33CCCC")} alt='#33CCCC' />
          <area    shape='poly' coords='99,30,108,34,108,45,99,49,90,45,90,34' onClick={(e)=>clickColor("#00CCFF",-170,90)} onMouseOver={(e)=>mouseOverColor("#00CCFF")} alt='#00CCFF' />
          <area    shape='poly' coords='117,30,126,34,126,45,117,49,108,45,108,34' onClick={(e)=>clickColor("#0099FF",-170,108)} onMouseOver={(e)=>mouseOverColor("#0099FF")} alt='#0099FF' />
          <area    shape='poly' coords='135,30,144,34,144,45,135,49,126,45,126,34' onClick={(e)=>clickColor("#0066FF",-170,126)} onMouseOver={(e)=>mouseOverColor("#0066FF")} alt='#0066FF' />
          <area    shape='poly' coords='153,30,162,34,162,45,153,49,144,45,144,34' onClick={(e)=>clickColor("#3366FF",-170,144)} onMouseOver={(e)=>mouseOverColor("#3366FF")} alt='#3366FF' />
          <area    shape='poly' coords='171,30,180,34,180,45,171,49,162,45,162,34' onClick={(e)=>clickColor("#3333CC",-170,162)} onMouseOver={(e)=>mouseOverColor("#3333CC")} alt='#3333CC' />
          <area    shape='poly' coords='189,30,198,34,198,45,189,49,180,45,180,34' onClick={(e)=>clickColor("#666699",-170,180)} onMouseOver={(e)=>mouseOverColor("#666699")} alt='#666699' />
          <area    shape='poly' coords='36,45,45,49,45,60,36,64,27,60,27,49' onClick={(e)=>clickColor("#339966",-155,27)} onMouseOver={(e)=>mouseOverColor("#339966")} alt='#339966' />
          <area    shape='poly' coords='54,45,63,49,63,60,54,64,45,60,45,49' onClick={(e)=>clickColor("#00CC99",-155,45)} onMouseOver={(e)=>mouseOverColor("#00CC99")} alt='#00CC99' />
          <area    shape='poly' coords='72,45,81,49,81,60,72,64,63,60,63,49' onClick={(e)=>clickColor("#00FFCC",-155,63)} onMouseOver={(e)=>mouseOverColor("#00FFCC")} alt='#00FFCC' />
          <area    shape='poly' coords='90,45,99,49,99,60,90,64,81,60,81,49' onClick={(e)=>clickColor("#00FFFF",-155,81)} onMouseOver={(e)=>mouseOverColor("#00FFFF")} alt='#00FFFF' />
          <area    shape='poly' coords='108,45,117,49,117,60,108,64,99,60,99,49' onClick={(e)=>clickColor("#33CCFF",-155,99)} onMouseOver={(e)=>mouseOverColor("#33CCFF")} alt='#33CCFF' />
          <area    shape='poly' coords='126,45,135,49,135,60,126,64,117,60,117,49' onClick={(e)=>clickColor("#3399FF",-155,117)} onMouseOver={(e)=>mouseOverColor("#3399FF")} alt='#3399FF' />
          <area    shape='poly' coords='144,45,153,49,153,60,144,64,135,60,135,49' onClick={(e)=>clickColor("#6699FF",-155,135)} onMouseOver={(e)=>mouseOverColor("#6699FF")} alt='#6699FF' />
          <area    shape='poly' coords='162,45,171,49,171,60,162,64,153,60,153,49' onClick={(e)=>clickColor("#6666FF",-155,153)} onMouseOver={(e)=>mouseOverColor("#6666FF")} alt='#6666FF' />
          <area    shape='poly' coords='180,45,189,49,189,60,180,64,171,60,171,49' onClick={(e)=>clickColor("#6600FF",-155,171)} onMouseOver={(e)=>mouseOverColor("#6600FF")} alt='#6600FF' />
          <area    shape='poly' coords='198,45,207,49,207,60,198,64,189,60,189,49' onClick={(e)=>clickColor("#6600CC",-155,189)} onMouseOver={(e)=>mouseOverColor("#6600CC")} alt='#6600CC' />
          <area    shape='poly' coords='27,60,36,64,36,75,27,79,18,75,18,64' onClick={(e)=>clickColor("#339933",-140,18)} onMouseOver={(e)=>mouseOverColor("#339933")} alt='#339933' />
          <area    shape='poly' coords='45,60,54,64,54,75,45,79,36,75,36,64' onClick={(e)=>clickColor("#00CC66",-140,36)} onMouseOver={(e)=>mouseOverColor("#00CC66")} alt='#00CC66' />
          <area    shape='poly' coords='63,60,72,64,72,75,63,79,54,75,54,64' onClick={(e)=>clickColor("#00FF99",-140,54)} onMouseOver={(e)=>mouseOverColor("#00FF99")} alt='#00FF99' />
          <area    shape='poly' coords='81,60,90,64,90,75,81,79,72,75,72,64' onClick={(e)=>clickColor("#66FFCC",-140,72)} onMouseOver={(e)=>mouseOverColor("#66FFCC")} alt='#66FFCC' />
          <area    shape='poly' coords='99,60,108,64,108,75,99,79,90,75,90,64' onClick={(e)=>clickColor("#66FFFF",-140,90)} onMouseOver={(e)=>mouseOverColor("#66FFFF")} alt='#66FFFF' />
          <area    shape='poly' coords='117,60,126,64,126,75,117,79,108,75,108,64' onClick={(e)=>clickColor("#66CCFF",-140,108)} onMouseOver={(e)=>mouseOverColor("#66CCFF")} alt='#66CCFF' />
          <area    shape='poly' coords='135,60,144,64,144,75,135,79,126,75,126,64' onClick={(e)=>clickColor("#99CCFF",-140,126)} onMouseOver={(e)=>mouseOverColor("#99CCFF")} alt='#99CCFF' />
          <area    shape='poly' coords='153,60,162,64,162,75,153,79,144,75,144,64' onClick={(e)=>clickColor("#9999FF",-140,144)} onMouseOver={(e)=>mouseOverColor("#9999FF")} alt='#9999FF' />
          <area    shape='poly' coords='171,60,180,64,180,75,171,79,162,75,162,64' onClick={(e)=>clickColor("#9966FF",-140,162)} onMouseOver={(e)=>mouseOverColor("#9966FF")} alt='#9966FF' />
          <area    shape='poly' coords='189,60,198,64,198,75,189,79,180,75,180,64' onClick={(e)=>clickColor("#9933FF",-140,180)} onMouseOver={(e)=>mouseOverColor("#9933FF")} alt='#9933FF' />
          <area    shape='poly' coords='207,60,216,64,216,75,207,79,198,75,198,64' onClick={(e)=>clickColor("#9900FF",-140,198)} onMouseOver={(e)=>mouseOverColor("#9900FF")} alt='#9900FF' />
          <area    shape='poly' coords='18,75,27,79,27,90,18,94,9,90,9,79' onClick={(e)=>clickColor("#006600",-125,9)} onMouseOver={(e)=>mouseOverColor("#006600")} alt='#006600' />
          <area    shape='poly' coords='36,75,45,79,45,90,36,94,27,90,27,79' onClick={(e)=>clickColor("#00CC00",-125,27)} onMouseOver={(e)=>mouseOverColor("#00CC00")} alt='#00CC00' />
          <area    shape='poly' coords='54,75,63,79,63,90,54,94,45,90,45,79' onClick={(e)=>clickColor("#00FF00",-125,45)} onMouseOver={(e)=>mouseOverColor("#00FF00")} alt='#00FF00' />
          <area    shape='poly' coords='72,75,81,79,81,90,72,94,63,90,63,79' onClick={(e)=>clickColor("#66FF99",-125,63)} onMouseOver={(e)=>mouseOverColor("#66FF99")} alt='#66FF99' />
          <area    shape='poly' coords='90,75,99,79,99,90,90,94,81,90,81,79' onClick={(e)=>clickColor("#99FFCC",-125,81)} onMouseOver={(e)=>mouseOverColor("#99FFCC")} alt='#99FFCC' />
          <area    shape='poly' coords='108,75,117,79,117,90,108,94,99,90,99,79' onClick={(e)=>clickColor("#CCFFFF",-125,99)} onMouseOver={(e)=>mouseOverColor("#CCFFFF")} alt='#CCFFFF' />
          <area    shape='poly' coords='126,75,135,79,135,90,126,94,117,90,117,79' onClick={(e)=>clickColor("#CCCCFF",-125,117)} onMouseOver={(e)=>mouseOverColor("#CCCCFF")} alt='#CCCCFF' />
          <area    shape='poly' coords='144,75,153,79,153,90,144,94,135,90,135,79' onClick={(e)=>clickColor("#CC99FF",-125,135)} onMouseOver={(e)=>mouseOverColor("#CC99FF")} alt='#CC99FF' />
          <area    shape='poly' coords='162,75,171,79,171,90,162,94,153,90,153,79' onClick={(e)=>clickColor("#CC66FF",-125,153)} onMouseOver={(e)=>mouseOverColor("#CC66FF")} alt='#CC66FF' />
          <area    shape='poly' coords='180,75,189,79,189,90,180,94,171,90,171,79' onClick={(e)=>clickColor("#CC33FF",-125,171)} onMouseOver={(e)=>mouseOverColor("#CC33FF")} alt='#CC33FF' />
          <area    shape='poly' coords='198,75,207,79,207,90,198,94,189,90,189,79' onClick={(e)=>clickColor("#CC00FF",-125,189)} onMouseOver={(e)=>mouseOverColor("#CC00FF")} alt='#CC00FF' />
          <area    shape='poly' coords='216,75,225,79,225,90,216,94,207,90,207,79' onClick={(e)=>clickColor("#9900CC",-125,207)} onMouseOver={(e)=>mouseOverColor("#9900CC")} alt='#9900CC' />
          <area    shape='poly' coords='9,90,18,94,18,105,9,109,0,105,0,94' onClick={(e)=>clickColor("#003300",-110,0)} onMouseOver={(e)=>mouseOverColor("#003300")} alt='#003300' />
          <area    shape='poly' coords='27,90,36,94,36,105,27,109,18,105,18,94' onClick={(e)=>clickColor("#009933",-110,18)} onMouseOver={(e)=>mouseOverColor("#009933")} alt='#009933' />
          <area    shape='poly' coords='45,90,54,94,54,105,45,109,36,105,36,94' onClick={(e)=>clickColor("#33CC33",-110,36)} onMouseOver={(e)=>mouseOverColor("#33CC33")} alt='#33CC33' />
          <area    shape='poly' coords='63,90,72,94,72,105,63,109,54,105,54,94' onClick={(e)=>clickColor("#66FF66",-110,54)} onMouseOver={(e)=>mouseOverColor("#66FF66")} alt='#66FF66' />
          <area    shape='poly' coords='81,90,90,94,90,105,81,109,72,105,72,94' onClick={(e)=>clickColor("#99FF99",-110,72)} onMouseOver={(e)=>mouseOverColor("#99FF99")} alt='#99FF99' />
          <area    shape='poly' coords='99,90,108,94,108,105,99,109,90,105,90,94' onClick={(e)=>clickColor("#CCFFCC",-110,90)} onMouseOver={(e)=>mouseOverColor("#CCFFCC")} alt='#CCFFCC' />
          <area    shape='poly' coords='117,90,126,94,126,105,117,109,108,105,108,94' onClick={(e)=>clickColor("#FFFFFF",-110,108)} onMouseOver={(e)=>mouseOverColor("#FFFFFF")} alt='#FFFFFF' />
          <area    shape='poly' coords='135,90,144,94,144,105,135,109,126,105,126,94' onClick={(e)=>clickColor("#FFCCFF",-110,126)} onMouseOver={(e)=>mouseOverColor("#FFCCFF")} alt='#FFCCFF' />
          <area    shape='poly' coords='153,90,162,94,162,105,153,109,144,105,144,94' onClick={(e)=>clickColor("#FF99FF",-110,144)} onMouseOver={(e)=>mouseOverColor("#FF99FF")} alt='#FF99FF' />
          <area    shape='poly' coords='171,90,180,94,180,105,171,109,162,105,162,94' onClick={(e)=>clickColor("#FF66FF",-110,162)} onMouseOver={(e)=>mouseOverColor("#FF66FF")} alt='#FF66FF' />
          <area    shape='poly' coords='189,90,198,94,198,105,189,109,180,105,180,94' onClick={(e)=>clickColor("#FF00FF",-110,180)} onMouseOver={(e)=>mouseOverColor("#FF00FF")} alt='#FF00FF' />
          <area    shape='poly' coords='207,90,216,94,216,105,207,109,198,105,198,94' onClick={(e)=>clickColor("#CC00CC",-110,198)} onMouseOver={(e)=>mouseOverColor("#CC00CC")} alt='#CC00CC' />
          <area    shape='poly' coords='225,90,234,94,234,105,225,109,216,105,216,94' onClick={(e)=>clickColor("#660066",-110,216)} onMouseOver={(e)=>mouseOverColor("#660066")} alt='#660066' />
          <area    shape='poly' coords='18,105,27,109,27,120,18,124,9,120,9,109' onClick={(e)=>clickColor("#336600",-95,9)} onMouseOver={(e)=>mouseOverColor("#336600")} alt='#336600' />
          <area    shape='poly' coords='36,105,45,109,45,120,36,124,27,120,27,109' onClick={(e)=>clickColor("#009900",-95,27)} onMouseOver={(e)=>mouseOverColor("#009900")} alt='#009900' />
          <area    shape='poly' coords='54,105,63,109,63,120,54,124,45,120,45,109' onClick={(e)=>clickColor("#66FF33",-95,45)} onMouseOver={(e)=>mouseOverColor("#66FF33")} alt='#66FF33' />
          <area    shape='poly' coords='72,105,81,109,81,120,72,124,63,120,63,109' onClick={(e)=>clickColor("#99FF66",-95,63)} onMouseOver={(e)=>mouseOverColor("#99FF66")} alt='#99FF66' />
          <area    shape='poly' coords='90,105,99,109,99,120,90,124,81,120,81,109' onClick={(e)=>clickColor("#CCFF99",-95,81)} onMouseOver={(e)=>mouseOverColor("#CCFF99")} alt='#CCFF99' />
          <area    shape='poly' coords='108,105,117,109,117,120,108,124,99,120,99,109' onClick={(e)=>clickColor("#FFFFCC",-95,99)} onMouseOver={(e)=>mouseOverColor("#FFFFCC")} alt='#FFFFCC' />
          <area    shape='poly' coords='126,105,135,109,135,120,126,124,117,120,117,109' onClick={(e)=>clickColor("#FFCCCC",-95,117)} onMouseOver={(e)=>mouseOverColor("#FFCCCC")} alt='#FFCCCC' />
          <area    shape='poly' coords='144,105,153,109,153,120,144,124,135,120,135,109' onClick={(e)=>clickColor("#FF99CC",-95,135)} onMouseOver={(e)=>mouseOverColor("#FF99CC")} alt='#FF99CC' />
          <area    shape='poly' coords='162,105,171,109,171,120,162,124,153,120,153,109' onClick={(e)=>clickColor("#FF66CC",-95,153)} onMouseOver={(e)=>mouseOverColor("#FF66CC")} alt='#FF66CC' />
          <area    shape='poly' coords='180,105,189,109,189,120,180,124,171,120,171,109' onClick={(e)=>clickColor("#FF33CC",-95,171)} onMouseOver={(e)=>mouseOverColor("#FF33CC")} alt='#FF33CC' />
          <area    shape='poly' coords='198,105,207,109,207,120,198,124,189,120,189,109' onClick={(e)=>clickColor("#CC0099",-95,189)} onMouseOver={(e)=>mouseOverColor("#CC0099")} alt='#CC0099' />
          <area    shape='poly' coords='216,105,225,109,225,120,216,124,207,120,207,109' onClick={(e)=>clickColor("#993399",-95,207)} onMouseOver={(e)=>mouseOverColor("#993399")} alt='#993399' />
          <area    shape='poly' coords='27,120,36,124,36,135,27,139,18,135,18,124' onClick={(e)=>clickColor("#333300",-80,18)} onMouseOver={(e)=>mouseOverColor("#333300")} alt='#333300' />
          <area    shape='poly' coords='45,120,54,124,54,135,45,139,36,135,36,124' onClick={(e)=>clickColor("#669900",-80,36)} onMouseOver={(e)=>mouseOverColor("#669900")} alt='#669900' />
          <area    shape='poly' coords='63,120,72,124,72,135,63,139,54,135,54,124' onClick={(e)=>clickColor("#99FF33",-80,54)} onMouseOver={(e)=>mouseOverColor("#99FF33")} alt='#99FF33' />
          <area    shape='poly' coords='81,120,90,124,90,135,81,139,72,135,72,124' onClick={(e)=>clickColor("#CCFF66",-80,72)} onMouseOver={(e)=>mouseOverColor("#CCFF66")} alt='#CCFF66' />
          <area    shape='poly' coords='99,120,108,124,108,135,99,139,90,135,90,124' onClick={(e)=>clickColor("#FFFF99",-80,90)} onMouseOver={(e)=>mouseOverColor("#FFFF99")} alt='#FFFF99' />
          <area    shape='poly' coords='117,120,126,124,126,135,117,139,108,135,108,124' onClick={(e)=>clickColor("#FFCC99",-80,108)} onMouseOver={(e)=>mouseOverColor("#FFCC99")} alt='#FFCC99' />
          <area    shape='poly' coords='135,120,144,124,144,135,135,139,126,135,126,124' onClick={(e)=>clickColor("#FF9999",-80,126)} onMouseOver={(e)=>mouseOverColor("#FF9999")} alt='#FF9999' />
          <area    shape='poly' coords='153,120,162,124,162,135,153,139,144,135,144,124' onClick={(e)=>clickColor("#FF6699",-80,144)} onMouseOver={(e)=>mouseOverColor("#FF6699")} alt='#FF6699' />
          <area    shape='poly' coords='171,120,180,124,180,135,171,139,162,135,162,124' onClick={(e)=>clickColor("#FF3399",-80,162)} onMouseOver={(e)=>mouseOverColor("#FF3399")} alt='#FF3399' />
          <area    shape='poly' coords='189,120,198,124,198,135,189,139,180,135,180,124' onClick={(e)=>clickColor("#CC3399",-80,180)} onMouseOver={(e)=>mouseOverColor("#CC3399")} alt='#CC3399' />
          <area    shape='poly' coords='207,120,216,124,216,135,207,139,198,135,198,124' onClick={(e)=>clickColor("#990099",-80,198)} onMouseOver={(e)=>mouseOverColor("#990099")} alt='#990099' />
          <area    shape='poly' coords='36,135,45,139,45,150,36,154,27,150,27,139' onClick={(e)=>clickColor("#666633",-65,27)} onMouseOver={(e)=>mouseOverColor("#666633")} alt='#666633' />
          <area    shape='poly' coords='54,135,63,139,63,150,54,154,45,150,45,139' onClick={(e)=>clickColor("#99CC00",-65,45)} onMouseOver={(e)=>mouseOverColor("#99CC00")} alt='#99CC00' />
          <area    shape='poly' coords='72,135,81,139,81,150,72,154,63,150,63,139' onClick={(e)=>clickColor("#CCFF33",-65,63)} onMouseOver={(e)=>mouseOverColor("#CCFF33")} alt='#CCFF33' />
          <area    shape='poly' coords='90,135,99,139,99,150,90,154,81,150,81,139' onClick={(e)=>clickColor("#FFFF66",-65,81)} onMouseOver={(e)=>mouseOverColor("#FFFF66")} alt='#FFFF66' />
          <area    shape='poly' coords='108,135,117,139,117,150,108,154,99,150,99,139' onClick={(e)=>clickColor("#FFCC66",-65,99)} onMouseOver={(e)=>mouseOverColor("#FFCC66")} alt='#FFCC66' />
          <area    shape='poly' coords='126,135,135,139,135,150,126,154,117,150,117,139' onClick={(e)=>clickColor("#FF9966",-65,117)} onMouseOver={(e)=>mouseOverColor("#FF9966")} alt='#FF9966' />
          <area    shape='poly' coords='144,135,153,139,153,150,144,154,135,150,135,139' onClick={(e)=>clickColor("#FF6666",-65,135)} onMouseOver={(e)=>mouseOverColor("#FF6666")} alt='#FF6666' />
          <area    shape='poly' coords='162,135,171,139,171,150,162,154,153,150,153,139' onClick={(e)=>clickColor("#FF0066",-65,153)} onMouseOver={(e)=>mouseOverColor("#FF0066")} alt='#FF0066' />
          <area    shape='poly' coords='180,135,189,139,189,150,180,154,171,150,171,139' onClick={(e)=>clickColor("#CC6699",-65,171)} onMouseOver={(e)=>mouseOverColor("#CC6699")} alt='#CC6699' />
          <area    shape='poly' coords='198,135,207,139,207,150,198,154,189,150,189,139' onClick={(e)=>clickColor("#993366",-65,189)} onMouseOver={(e)=>mouseOverColor("#993366")} alt='#993366' />
          <area    shape='poly' coords='45,150,54,154,54,165,45,169,36,165,36,154' onClick={(e)=>clickColor("#999966",-50,36)} onMouseOver={(e)=>mouseOverColor("#999966")} alt='#999966' />
          <area    shape='poly' coords='63,150,72,154,72,165,63,169,54,165,54,154' onClick={(e)=>clickColor("#CCCC00",-50,54)} onMouseOver={(e)=>mouseOverColor("#CCCC00")} alt='#CCCC00' />
          <area    shape='poly' coords='81,150,90,154,90,165,81,169,72,165,72,154' onClick={(e)=>clickColor("#FFFF00",-50,72)} onMouseOver={(e)=>mouseOverColor("#FFFF00")} alt='#FFFF00' />
          <area    shape='poly' coords='99,150,108,154,108,165,99,169,90,165,90,154' onClick={(e)=>clickColor("#FFCC00",-50,90)} onMouseOver={(e)=>mouseOverColor("#FFCC00")} alt='#FFCC00' />
          <area    shape='poly' coords='117,150,126,154,126,165,117,169,108,165,108,154' onClick={(e)=>clickColor("#FF9933",-50,108)} onMouseOver={(e)=>mouseOverColor("#FF9933")} alt='#FF9933' />
          <area    shape='poly' coords='135,150,144,154,144,165,135,169,126,165,126,154' onClick={(e)=>clickColor("#FF6600",-50,126)} onMouseOver={(e)=>mouseOverColor("#FF6600")} alt='#FF6600' />
          <area    shape='poly' coords='153,150,162,154,162,165,153,169,144,165,144,154' onClick={(e)=>clickColor("#FF5050",-50,144)} onMouseOver={(e)=>mouseOverColor("#FF5050")} alt='#FF5050' />
          <area    shape='poly' coords='171,150,180,154,180,165,171,169,162,165,162,154' onClick={(e)=>clickColor("#CC0066",-50,162)} onMouseOver={(e)=>mouseOverColor("#CC0066")} alt='#CC0066' />
          <area    shape='poly' coords='189,150,198,154,198,165,189,169,180,165,180,154' onClick={(e)=>clickColor("#660033",-50,180)} onMouseOver={(e)=>mouseOverColor("#660033")} alt='#660033' />
          <area    shape='poly' coords='54,165,63,169,63,180,54,184,45,180,45,169' onClick={(e)=>clickColor("#996633",-35,45)} onMouseOver={(e)=>mouseOverColor("#996633")} alt='#996633' />
          <area    shape='poly' coords='72,165,81,169,81,180,72,184,63,180,63,169' onClick={(e)=>clickColor("#CC9900",-35,63)} onMouseOver={(e)=>mouseOverColor("#CC9900")} alt='#CC9900' />
          <area    shape='poly' coords='90,165,99,169,99,180,90,184,81,180,81,169' onClick={(e)=>clickColor("#FF9900",-35,81)} onMouseOver={(e)=>mouseOverColor("#FF9900")} alt='#FF9900' />
          <area    shape='poly' coords='108,165,117,169,117,180,108,184,99,180,99,169' onClick={(e)=>clickColor("#CC6600",-35,99)} onMouseOver={(e)=>mouseOverColor("#CC6600")} alt='#CC6600' />
          <area    shape='poly' coords='126,165,135,169,135,180,126,184,117,180,117,169' onClick={(e)=>clickColor("#FF3300",-35,117)} onMouseOver={(e)=>mouseOverColor("#FF3300")} alt='#FF3300' />
          <area    shape='poly' coords='144,165,153,169,153,180,144,184,135,180,135,169' onClick={(e)=>clickColor("#FF0000",-35,135)} onMouseOver={(e)=>mouseOverColor("#FF0000")} alt='#FF0000' />
          <area    shape='poly' coords='162,165,171,169,171,180,162,184,153,180,153,169' onClick={(e)=>clickColor("#CC0000",-35,153)} onMouseOver={(e)=>mouseOverColor("#CC0000")} alt='#CC0000' />
          <area    shape='poly' coords='180,165,189,169,189,180,180,184,171,180,171,169' onClick={(e)=>clickColor("#990033",-35,171)} onMouseOver={(e)=>mouseOverColor("#990033")} alt='#990033' />
          <area    shape='poly' coords='63,180,72,184,72,195,63,199,54,195,54,184' onClick={(e)=>clickColor("#663300",-20,54)} onMouseOver={(e)=>mouseOverColor("#663300")} alt='#663300' />
          <area    shape='poly' coords='81,180,90,184,90,195,81,199,72,195,72,184' onClick={(e)=>clickColor("#996600",-20,72)} onMouseOver={(e)=>mouseOverColor("#996600")} alt='#996600' />
          <area    shape='poly' coords='99,180,108,184,108,195,99,199,90,195,90,184' onClick={(e)=>clickColor("#CC3300",-20,90)} onMouseOver={(e)=>mouseOverColor("#CC3300")} alt='#CC3300' />
          <area    shape='poly' coords='117,180,126,184,126,195,117,199,108,195,108,184' onClick={(e)=>clickColor("#993300",-20,108)} onMouseOver={(e)=>mouseOverColor("#993300")} alt='#993300' />
          <area    shape='poly' coords='135,180,144,184,144,195,135,199,126,195,126,184' onClick={(e)=>clickColor("#990000",-20,126)} onMouseOver={(e)=>mouseOverColor("#990000")} alt='#990000' />
          <area    shape='poly' coords='153,180,162,184,162,195,153,199,144,195,144,184' onClick={(e)=>clickColor("#800000",-20,144)} onMouseOver={(e)=>mouseOverColor("#800000")} alt='#800000' />
          <area    shape='poly' coords='171,180,180,184,180,195,171,199,162,195,162,184' onClick={(e)=>clickColor("#993333",-20,162)} onMouseOver={(e)=>mouseOverColor("#993333")} alt='#993333' />
        </map>  
        <div className=" ml-3 p-[3px_10px_3px_10px] mt-5 flex justify-center">
          <div className=''>          
            <button id='testbt' className={'w-12 h-12 '} style={{background:curColor}}></button>  
          </div>
        </div>
        <div className="mt-5 ml-4 flex justify-center">
          <p className="text-5xl text-red-600/100 tracking-tight">R:</p>
          <input className=" w-40 text-center text-5xl" type ="text" onChange={rchange} value={rValue}/>
          <p className="text-5xl text-green-600/100 tracking-tight">G:</p>
          <input className=" w-40 text-center text-5xl" type ="text" onChange={gchange} value={gValue}/>
          <p className="text-5xl text-blue-600/100 tracking-tight">B:</p>
          <input className=" w-40 text-center text-5xl" type ="text" onChange={bchange} value={bValue}/>
        </div>        
      </div>
    </div>        
      {/* 
      <table className="table-auto border-separate border-spacing-2 border border-slate-400 ">
        <thead>
          <tr>
            <th colSpan="4">Group1:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">List</p>
              <ul className="list-disc list-inside font-extrabold font-sans">
                <li>First</li>
              </ul>
              <ul className="list-decimal list-inside italic  leading-loose">
                <li>Second</li>
              </ul>
              <ul className="list-none list-inside  tracking-tighter truncate hover:list-disc">
                <li>hover me</li>
              </ul> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Button</p>
              <button type="button" className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer ">
                Submit
              </button> 
              <button type="button" className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-progress">
                Saving
              </button>
              <button type="button" disabled className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-not-allowed">
                Confirm
              </button>
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Pagenation</p>
              <div className="pagination ">
                <a href="1" >&laquo;</a>
                <a href="1" >1</a>
                <a href="1" >2</a>
                <a href="1" >3</a>
                <a href="1" >4</a>
                <a href="1" >&raquo;</a>
              </div>

            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Layout</p> 
            </td>
          </tr>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Popover</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">ProgressBar</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Tab</p> 
            </td>
            <td className="border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Card</p> 
             
            </td>
          </tr>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Dropdown</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Search</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Notification</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Calendar</p> 
            </td>
          </tr>
          <tr><td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Slide</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Loader</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">GroupButton</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Badge</p> 
            </td>
          </tr>
        </tbody>
      </table> 
      
      
      
      <table className="table-auto border-separate border-spacing-2 border border-slate-400 ">
        <thead>
          <tr>
            <th colSpan="4">Group2:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Chat</p>
              <ul className="list-disc list-inside font-extrabold font-sans">
                <li>First</li>
              </ul>
              <ul className="list-decimal list-inside italic  leading-loose">
                <li>Second</li>
              </ul>
              <ul className="list-none list-inside  tracking-tighter truncate hover:list-disc">
                <li>hover me</li>
              </ul> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Contact</p>
              <button type="button" className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer ">
                Submit
              </button> 
              <button type="button" className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-progress">
                Saving
              </button>
              <button type="button" disabled className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-not-allowed">
                Confirm
              </button>
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Pricing</p>
              <div className="pagination ">
                <a href="1" >&laquo;</a>
                <a href="1" >1</a>
                <a href="1" >2</a>
                <a href="1" >3</a>
                <a href="1" >4</a>
                <a href="1" >&raquo;</a>
              </div>
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">FAQ</p> 
            </td>
          </tr>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">404 Error Pages</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Flyout Menu</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Newsletter</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Product</p> 
            </td>
          </tr>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Testimonial</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Stat</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Cloud Logo</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Team</p> 
            </td>
          </tr>
          <tr><td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">CTA</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">About</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Blog</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Feature</p> 
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto border-separate border-spacing-2 border border-slate-400 ">
        <thead>
          <tr>
            <th colSpan="4">Group3:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Checkouts</p>
              <ul className="list-disc list-inside font-extrabold font-sans">
                <li>First</li>
              </ul>
              <ul className="list-decimal list-inside italic  leading-loose">
                <li>Second</li>
              </ul>
              <ul className="list-none list-inside  tracking-tighter truncate hover:list-disc">
                <li>hover me</li>
              </ul> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Banners</p>
              <button type="button" className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-pointer ">
                Submit
              </button> 
              <button type="button" className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-progress">
                Saving
              </button>
              <button type="button" disabled className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none cursor-not-allowed">
                Confirm
              </button>
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Best Sellers</p>
              <div className="pagination ">
                <a href="1" >&laquo;</a>
                <a href="1" >1</a>
                <a href="1" >2</a>
                <a href="1" >3</a>
                <a href="1" >4</a>
                <a href="1" >&raquo;</a>
              </div>
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Carousels</p> 
            </td>
          </tr>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Cookies</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">ProgressBar</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Filters</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Footers</p> 
            </td>
          </tr>
          <tr>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Highlights</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Newsletters</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Partners</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Shopping Carts</p> 
            </td>
          </tr>
          <tr><td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Socials</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Wishlists</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Quick Views</p> 
            </td>
            <td className="table-auto border-separate border-spacing-2 border border-slate-400 ">
              <p className="text-slate-500 tracking-tight">Product Categories</p> 
            </td>
          </tr>
        </tbody>
      </table> */}



    </div> 
    
 

    
  );
}

export default App;
