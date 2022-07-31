import React from 'react';
 class Search extends React.Component{

    state={
        colornames:{
            Banglore:false,
            Pune:false,
            Noida:false,
            Chennai:false,
            Hydrabad:false,
            Coimbatore:false,
            Gurugaun:false,



        }}
        Checkclick = (e) =>{
            var {name,checked} = e.target;
            this.setState((e)=>{
                var Selectedspot=e.colornames;
                return Selectedspot[name]=checked;
            });
        };
    
    render(){
        var displayspot = Object.keys(this.state.colornames).filter((x)=>this.state.colornames[x]);
        return(
            <div>
                <h1>Location</h1>
                <br />
                <input type="checkbox" name='Banglore' onChange={this.Checkclick} />Banglore &nbsp;
                <input type="checkbox" name='Pune' onChange={this.Checkclick} />Pune &nbsp;
                <input type="checkbox" name='Noida' onChange={this.Checkclick} />Noida &nbsp;
                <input type="checkbox" name='Chennai' onChange={this.Checkclick} />Chennai &nbsp;
                <input type="checkbox" name='Hydrabad' onChange={this.Checkclick} />Hydrabad &nbsp;
                <input type="checkbox" name='Coimbatore' onChange={this.Checkclick} />Coimbatore &nbsp;
                <input type="checkbox" name='Gurugram' onChange={this.Checkclick} />Gurugram &nbsp;
                <strong>{displayspot}</strong>
            </div>
        );
        
    }
 }
 export default Search;