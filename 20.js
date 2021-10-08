const transform = (arg1, arg2) => {
  for (const [key, value] of Object.entries(arg1)) {
    arg2 = arg2.concat([[key.replace(/\w*_/, 'The ' ), value]]);
  }
  return Object.assign({}, arg2);
}


































// danger zone *****




console.log(

  transform(
    {
      hotel_Astoria: {petFriendly: false, rooms: 238}, 
      hotel_Ritz: {petFriendly: false, rooms: 560}, 
      hotel_HolidayInn: {petFriendly: true, rooms: 374}
    }, [])

  );