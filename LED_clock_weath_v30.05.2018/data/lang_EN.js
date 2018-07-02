var langEN = {
	header:"CLOCK on ESP-12 ver: 30/05/2018 (by IvanZah)",
    save:"Save",
    setWiFi:"Setting wifi",
    setTime:"Setting time",
    setMqtt:"Configuring mqtt",
    setWeather:"Setting weather",
    setLed:"Setting display",
    help:"Help",
    reset:"Restart device",
    do:"to:",
    lang:"Language",
    forum:"Forum",
	//-- index
	P_wifi_title:"WIFI setup",
	P_wifi_informer:"Connecting to the internet network will allow you to synchronize the time and receive a weather forecast.",
	P_wifi_setWiFi:"Connecting to WiFi router",
    P_wifi_ssid:"Enter the name of the WiFi network",
	P_wifi_password:"Enter the WiFi network password",
	P_wifi_setAP:"Access Point Parameters (IP_192.168.4.1)",
    P_wifi_ssidAP:"Enter the name of the access point",
	P_wifi_passwordAP:"Enter the access point password",
    //-- time
    P_time_title:"Time setting",
	P_time_informer:"Time on ESP:",
	P_time_set:'The exact time server for example "time.nist.gov"',
    P_time_adressNTP:"Enter the server address",
	P_time_timeZone:"Choose a time zone",
	P_time_daylight:"Daylight Saving Time",
    P_time_dailySignal:"Hourly Signal",
	P_time_signalStart:'"Cuckoo" works with:',
    P_time_save:"Belt out of PC and saving",
    //-- mqtt
    P_mqtt_title:"Configure MQTT",
	P_mqtt_informer:"Configure the MQTT server. You can use an external server, for example:",
    P_mqtt_mqttOn:"Use MQTT server",
	P_mqtt_set:"Connection to MQTT server:",
    P_mqtt_server:"MQTT server address",
	P_mqtt_port:"MQTT Server Port",
    P_mqtt_user:"Server user login",
	P_mqtt_pass:"Server User Password",
    P_mqtt_setESP:"Configuring ESP",
	P_mqtt_name:"Device name (ESP)",
    P_mqtt_sub:"Topic of external temperature",
	P_mqtt_sub_inform:"Topic of inform message",
    P_mqtt_pub_temp:"Topic of publication of temperature",
	P_mqtt_pub_tempUl:"Topic of publication temp. streets",
    P_mqtt_pub_hum:"Topic of humidity publication",
	P_mqtt_pub_press:"Press Release Topic",
    P_mqtt_pub_alt:"Topic of publication of height",
    //-- weather
    P_weather_title:"Setting the weather",
	P_weather_informer:"To obtain the weather forecast,",
    P_weather_linkAPI:"here we take the API key,",
    P_weather_linkID:"but here we find the cityID of our city.",
    P_weather_server:"Weather Server",
	P_weather_key:"API weather key",
    P_weather_ID:"ID of the City",
	P_weather_outForecast:"Display of weather forecast",
    P_weather_timeScrollStart:"Display a running line, with:",
    P_weather_timeScrollSpeed:"Treadmill speed",
	P_weather_update:"Update weather forecast",
    //-- led
    P_led_title:"Screen settings.",
	P_led_informer:"Brightness level of photoresistor (0-15): ",
    P_led_tbd:"Day mode works with:",
	P_led_vbd:"Brightness during the day:",
    P_led_vbn:"at night:",
	P_led_vba:"Automatic brightness level",
    P_led_sensorDom:"Room temperature sensor",
	P_led_sensorUl:"Outdoor temperature sensor",
    P_led_sensorHumi:"Room humidity sensor",
	P_led_sensorPrAl:"The pressure sensor is of the same height",
    P_led_rotate:"Screen rotation angle",
    //-- help
    P_help_title:"If something went wrong ...",
	P_help_informer1:"ATTENTION!!! Some changes can be irreversible !!!",
    P_help_informer2:"If you have entered something wrong and can not change it, then return the device to factory settings. The configuration file will be deleted. Device rebooted!",
	P_help_conf:"Open the configuration file",
    P_help_com:"Display information in the COM port",
	P_help_update:"Update: select and download the firmware (bin)",
    P_help_upload:"download",
    P_help_wait:"Wait...",
    restart:"Back to factory settings"
}