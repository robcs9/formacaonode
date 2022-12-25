import React, {useState, useEffect} from 'react';

export default function LoginHtml() {
  return (
      <html>
        <body>
          <main style={{display: 'flex', justifyContent:'center'}}>
            <div style={{display: 'flex', flexDirection:'column'}}>
               <img src='https://i.imgur.com/q7Sd3S8.jpg' width={863} height={656}/>
            </div>
            
            <div style={{alignSelf:'center', border:'solid', flexDirection:'column',
            justifyContent:'center', textAlign:'center', paddingBottom:50, marginLeft:50}}>
              <header style={{marginTop: 30, marginBottom: 30}}><h2>Login</h2></header>
              <form style={{width:300}}>
                <input type='text' placeholder='Email' style={{marginTop:10}}></input><br/>
                <input type='text' placeholder='Senha' style={{marginTop:10}}></input><br/>
              </form>
              <button type='submit' style={{marginTop:10, width:210}}>Acessar</button>
            </div>
          </main>
        </body>
      </html>
  );
}