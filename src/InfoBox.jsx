import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    
    // Object containing image URLs for different weather conditions
  const weatherImages = {
    clear: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xlYXIlMjB3ZWF0aGVyJTIwaW1nfGVufDB8fDB8fHww",
    cloudy: "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",
    rainy: "https://images.unsplash.com/photo-1561553873-e8491a564fd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",
    fog: "https://plus.unsplash.com/premium_photo-1732528575978-da4c673f4e60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9nZ3klMjB3ZWF0aGVyJTIwaW1nfGVufDB8fDB8fHww",
    snowy: "https://plus.unsplash.com/premium_photo-1726994887025-b91b0362b297?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // Add more weather types as needed
  };const weatherCondition = info.weather.toLowerCase(); // Make it lowercase for consistency
  const weatherImage = weatherImages[weatherCondition] || weatherImages.clear; // Default to 'clear' image if condition not found
  return (
    <div className="InfoBox">
      <div className="card-container">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={weatherImage} // Use dynamic image
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <span><strong>Temperature:</strong> {info.temp}°C</span><br />
              <span><strong>Feels Like:</strong> {info.feelsLike}°C</span><br />
              <span><strong>Min Temperature:</strong> {info.tempMin}°C</span><br />
              <span><strong>Max Temperature:</strong> {info.tempMax}°C</span><br />
              <span><strong>Humidity:</strong> {info.humidity}%</span><br />
              <span><strong>Weather Condition:</strong> {info.weather}</span>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
