
import React, {Component} from "react" 
import ColorSelector from "./ColorSelector"

class Canvas extends Component{ 
    constructor(props){ 
        super(props) 
        this.state = {hex: this.props.hex} 
        this.canvasRef = React.createRef() 
        this.context = null
    
        const {hex, coords, height, width} = props
        this.state = {
            hex,
            coords,
            height,
            width
        }
    } 

    setContext() {
        this.context = this.canvasRef.current.getContext('2d');
        this.context.strokeStyle = this.state.hex;
        this.context.lineJoin = "round";
        this.context.lineWidth = 3;
    }

    componentDidMount() {
        this.setContext()
    }
    
    componentDidUpdate(){
        this.setContext()
    }
    
    changeHandler = (hexVal) =>{ 
        this.setState({hex: hexVal})
    } 
   
    onCanvasMouseMove = (event) => {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const { height, width, coords } = this.state;
        if (x > 0 && x < width && y > 0 && y < height) {
            if (coords) {
                this.context.beginPath();
                this.context.moveTo(coords[0], coords[1]);
                this.context.lineTo(x, y);
                this.context.closePath();
                this.context.stroke();
                this.setState({ coords: [x,y]});
            }
        } else {
            this.setState({ coords: null });
        }
    }

    onCanvasMouseUp = () => {
        this.setState({ coords: null });
    }
    
    onCanvasMouseDown = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        this.setState({ coords: [x,y]})
    }

       

 render(){ 
     return( 
         <div>
    <div>  
      <ColorSelector 
      changeHandlerCb = {this.changeHandler} 
      hex ={this.state.hex}
      /> 
      </div> 
      <div> 
         <canvas ref={this.canvasRef} width={this.props.width} height={this.props.height} style={{border:"5px solid black"}} nMouseMove={this.onCanvasMouseMove} onMouseUp={this.onCanvasMouseUp} onMouseDown={this.onCanvasMouseDown}/>
      </div>  

      </div> 
     ) 
 }
}   

Canvas.defaultProps = { 
    hex: "#f4424b",
    coords: null,
    height: 400,
    width: 400
}   

export default Canvas