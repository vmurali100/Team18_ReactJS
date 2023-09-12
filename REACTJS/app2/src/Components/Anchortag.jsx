export function Anchortag(props){
    console.log(props
        )
    return <div>
        <img src="https://i2.wp.com/telugucinema.com/wp-content/uploads/2021/04/pushpa-still.jpg?fit=1200%2C900&ssl=1" alt="" />
        <a href="https://tse2.mm.bing.net/th?id=OIP.9WV49dBC605SglRn8l0dSAHaFM&pid=Api&P=0&h=180" target="blank">Araya</a>
        <h2>my name is AA:{props.name},{props.phno}</h2>
    </div>
}