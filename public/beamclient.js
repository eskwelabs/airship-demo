const beamsClient = new PusherPushNotifications.Client({
  instanceId: "7d44404f-7770-4948-bf86-5cc5e5ce77af",
});

beamsClient
  .start()
  .then(() => beamsClient.addDeviceInterest("hello"))
  .then(() => console.log("Successfully registered and subscribed!"))
  .catch(console.error);
