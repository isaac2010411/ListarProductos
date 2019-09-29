import React ,{ Component } from 'react'


class App extends Component{
    constructor(){
        super();
        this.state = {
            titulo:'',   
            marca:'',
            descripcion:'',
            productos : [],
            _id:'',
        }
    }
    sendProduct=(e)=>{
        
        if(this.state._id){
            fetch(`http://localhost:4001/api/data/${this.state._id}`,{
                method:'PUT',
                body:JSON.stringify(this.state),
                headers:{
                    "accept" : "application/json",
                    "content-type" : "application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                M.toast({ html : " producto actualizado"});
                this.getProduct()
                this.setState({ 
                    titulo:'',   
                    marca:'',
                    descripcion:'',
                    _id:'' 
                    
                })
            })
        }
        else{
            fetch('http://localhost:4001/api/data',{
                method:'POST',
                body:JSON.stringify(this.state),
                headers:{
                    "accept" : "application/json",
                    "content-type" : "application/json"
                }
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                M.toast({ html : " producto guardado "});
                this.getProduct()
                this.setState({ 
                    titulo:'',   
                    marca:'',
                    descripcion:'', 
                    
                })
            })
        }
    e.preventDefault()
    }
    componentDidMount(){
        this.getProduct()
    }

    getProduct=()=>{
        fetch('http://localhost:4001/api/data')
            .then(res=> res.json())
            .then(data=> {this.setState({ productos : data});
            console.log(this.state.productos)
        })
    }
    eliminarProducto=(id)=>{
       if(confirm( 'estas por borrar un producto..continuar?')){
        fetch(`http://localhost:4001/api/data/${id}`,{
            method : 'DELETE',
            headers: {
                "accept" : "application/json",
                "content-type" : "application/json"
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            M.toast({ html : " producto eliminado "});
            this.setState({ 
                titulo:'',   
                marca:'',
                descripcion:'', 
                
            })
            this.getProduct()
        })
       }
        
    }
    editarProducto=(id)=>{
        fetch(`http://localhost:4001/api/data/${id}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                this.setState({
                titulo : data.titulo,
                marca : data.marca,
                descripcion : data.descripcion,
                _id : data._id
            })
        })
    }

    handleChange =(e)=>{ 
        const { name , value }= e.target;
        this.setState({
            [name] : value
        })
    }
   

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s7">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.sendProduct}>
                                    <input type="text" name="titulo" onChange={this.handleChange} placeholder="Producto"value={this.state.titulo} required/>
                                    <input type="text" name="marca" onChange={this.handleChange} placeholder="Marca"value={this.state.marca} required/>
                                    <textarea onChange={this.handleChange} className="materialize-textarea" type="text" name="descripcion" placeholder="Descripcion del producto"value={this.state.descripcion} required/>
                                    <button type="submit">
                                        enviar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                   <div className="row">
                        <div className="col s6">
                            <table>
                                <thead>
                                  <tr>
                                      <th>Producto</th>
                                      <th>Marca</th>
                                      <th>Descripcion</th>
                                  </tr>
                                </thead>
                                <tbody>
                                { this.state.productos.map((producto)=>
                                  <tr key={producto._id}>
                                    <td>{producto.titulo}</td>
                                    <td>{producto.marca}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>
                                        <button onClick={()=>this.eliminarProducto(producto._id)}>
                                           <i className="material-icons">delete</i>
                                        </button>
                                        <button onClick={()=>this.editarProducto(producto._id)}>
                                        <i className="material-icons">edit</i>
                                        </button>
                                    </td>
                                  </tr>
                                  )}
                                </tbody>
                              </table>
                            
                        </div>
                    </div> 
                </div>
            
            
        </div>
        )
    }
    
}

export default App