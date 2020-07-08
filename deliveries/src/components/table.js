import React, { Component } from 'react';

import '../index.css';

export default function Table() {
  return (
    <>
      <div class="main">
        <div class="container">
          <div class="row row-cols-7">
            <div class="rute">
              <p>Ruta</p>
              <h4>RG10</h4>
            </div>
            <div class="info">
              <p>Conductor</p>
              <h4>José Luis Cepeda</h4>
            </div>
            <div class="info">
              <p>Creada</p>
              <h4>1 de Enero del 2019</h4>
            </div>
            <div class="info">
              <p>Inició</p>
              <h4>13:00</h4>
            </div>
            <div class="info">
              <p>Terminó</p>
              <h4>-</h4>
            </div>
            <div class="info">
              <p>Entregas</p>
              <h4>3</h4>
            </div>
            <div class="button1"><button type="button" class="inrute">En ruta</button></div>
          </div>
        </div>
        <br></br>
        <div class="container">
          <div class="row row-cols-7 ">
            <div class="rute1">
              <p>Ruta</p>
              <h4>RG20</h4>
            </div>
            <div class="info">
              <p>Conductor</p>
              <h4>Luis Ángel</h4>
            </div>
            <div class="info">
              <p>Creada</p>
              <h4>1 de Enero del 2019</h4>
            </div>
            <div class="info">
              <p>Inició</p>
              <h4>13:00</h4>
            </div>
            <div class="info">
              <p>Terminó</p>
              <h4>13:36</h4>
            </div>
            <div class="info">
              <p>Entregas</p>
              <h4>5</h4>
            </div>
            <div class="button1"><button type="button" class="complete">Completada</button></div>
          </div>
        </div>
        <br></br>
        <div class="container">
          <div class="row row-cols-7">
            <div class="rute1">
              <p>Ruta</p>
              <h4>RG30</h4>
            </div>
            <div class="info">
              <p>Conductor</p>
              <h4>Juan Manuel</h4>
            </div>
            <div class="info">
              <p>Creada</p>
              <h4>1 de Enero del 2019</h4>
            </div>
            <div class="info">
              <p>Inició</p>
              <h4>13:00</h4>
            </div>
            <div class="info">
              <p>Terminó</p>
              <h4>15:23</h4>
            </div>
            <div class="info">
              <p>Entregas</p>
              <h4>4</h4>
            </div>
            <div class="button1"><button type="button" class="complete">Completada</button></div>
          </div>
        </div>
        <br></br>
        <div class="container">
          <div class="row row-cols-7">
            <div class="rute">
              <p>Ruta</p>
              <h4>RG40</h4>
            </div>
            <div class="info">
              <p>Conductor</p>
              <h4>Enrique Ávila</h4>
            </div>
            <div class="info">
              <p>Creada</p>
              <h4>1 de Enero del 2019</h4>
            </div>
            <div class="info">
              <p>Inició</p>
              <h4>13:00</h4>
            </div>
            <div class="info">
              <p>Terminó</p>
              <h4>-</h4>
            </div>
            <div class="info">
              <p>Entregas</p>
              <h4>2</h4>
            </div>
            <div class="button1"><button type="button" class="inrute">En ruta</button></div>
          </div>
        </div>
      </div>
    </>

  )
}