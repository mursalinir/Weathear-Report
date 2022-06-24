<!-- HTML -->
<div class="search-box">
    <input
          type="text"
          class="search-bar"
          placeholder="Search city..."
          v-model="query"
          @keypress="fetchWeather"
        />
 </div>


 <!-- STYLING -->
<style>
.search-box {
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;

}

.search-box .search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  display: block;
  width: 60%;
  padding: 15px;  
  color: #090000;
  font-size: 25px;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 253, 253, 0.50);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 16px 0px 16px 0px;
  align-items: center;
  justify-content: center;
}

</style>