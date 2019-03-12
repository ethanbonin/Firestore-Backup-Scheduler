# Getting Started
### Step 1
 - Download gcloud which can be found [HERE](https://cloud.google.com/sdk/)
### Step 2  
- Download Repo: `git clone https://github.com/ethanbonin/Firestore-Backup-Scheduler.git`
### Step 3
- Run app: `npm run create`

You'll then see a command propt as such: 
```

Firestore PROJET_ID [Press Return when finished]: [YOUR_FIREBASE_PROJECT_ID]

```

### Last Steps (To verify it worked)
It's that easy.
Just verify the application was deployed successfully at go to **these** links: [https://**[YOUR_FIREBASE_PROJECT_ID]**.appspot.com/](www.google.com)
You should see something like this: 
![alt text](https://github.com/ethanbonin/Firestore-Backup-Scheduler/blob/master/Screenshots/Screen%20Shot%202019-03-12%20at%201.34.19%20PM.png "The front page of appspot")


Then to manually start an backup go to this link (if you want):
[https://**[YOUR_FIREBASE_PROJECT_ID]**.appspot.com/cloud-firestore-export?outputUriPrefix=gs://**[YOUR_FIREBASE_PROJECT_ID]**.appspot.com](www.google.com)

![alt text](https://github.com/ethanbonin/Firestore-Backup-Scheduler/blob/master/Screenshots/Screen%20Shot%202019-03-12%20at%201.36.00%20PM.png "Manually starting the backup")


When you are finished with the command prompt. It should do everything for you. Just go to your [GOOGLE CLOUD STORAGE](https://console.cloud.google.com/storage/) to verify that the backup was successfully made. You should see something like this in your **bucket**.

![alt text](https://github.com/ethanbonin/Firestore-Backup-Scheduler/blob/master/Screenshots/Screen%20Shot%202019-03-12%20at%201.38.56%20PM.png "The front page of appspot")


NOW ENJOY THOSE BACKUPS

![](https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif)


# Contribute????
Just fork the project then submit a pull request. Obviously, code can always be made better. So feel free to help if you have any ideas!
