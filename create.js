const fs = require("fs");
const { writeSync, dump } = require("node-yaml");
const readlineSync = require("readline-sync");
const execSync = require("child_process").execSync;

let projectID = readlineSync.question(
  "Firestore PROJET_ID [Press Return when finished]: "
);
if (projectID === "") {
  console.log("PROJECT ID IS EMPTY");
  return;
}
let cronData = {
  cron: {
    description: "Daily Cloud Firestore Export",
    url: `/cloud-firestore-export?outputUriPrefix=gs://${projectID}.appspot.com`,
    target: "cloud-firestore-admin",
    schedule: "every 24 hours"
  }
};

let yamlData = dump(cronData)
writeSync("./cron.yaml", yamlData, "utf8", err => {
  if (err) {
    console.log("err - Unable to write to cron file", err);
    return;
  }
});

console.log("\nsetting gcloud PROJECT:", projectID)
let changeProject = execSync(`gcloud config set project ${projectID}`);
console.log("\nCompleted Switching Projects")

let permissions = execSync(`gcloud projects add-iam-policy-binding ${projectID} \
    --member serviceAccount:${projectID}@appspot.gserviceaccount.com --role roles/datastore.importExportAdmin
    `);
console.log("\nFinished Updating Permissions...");

let objectCreator = execSync(
  `gsutil iam ch \
  serviceAccount:${projectID}@appspot.gserviceaccount.com:objectCreator \
  gs://${projectID}.appspot.com`
);
console.log("\nFinished Creating App Instances...");
console.log("Deploying App Instance...")
let deploy = execSync(`gcloud app deploy app.yaml cron.yaml`);
console.log("\nFinished Deploying Application");

let verifyLocation = `https://${projectID}.appspot.com/`;
let checkInstance = `https://${projectID}.appspot.com/cloud-firestore-export?outputUriPrefix=gs://${projectID}.appspot.com`;
console.log("\n\nPlease Verify by: ", verifyLocation);
console.log("\nCheck First Instance of Backup:", checkInstance);
