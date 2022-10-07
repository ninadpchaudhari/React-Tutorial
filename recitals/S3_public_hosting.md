# Using S3 to host files for your web apps
S3 can be used to serve static files publicly. This feature enables you to let object be hosted at S3 while getting a publicly accessable URL for the same.

The default policies of S3 is to not have public access to files, which is something we need to change. This is a recital on how to get that done. 

## Setting up a new bucket
1. Login into the AWS Console, Visit the S3 service page. 
2. Ensure appropriate Region is selected in the navbar. ( unless you know what you are doing, it should be either US East 1 or US East 2. Just maintain the same everytime)
3. Create a new bucket, by using the orange button!
4. Assign the bucket a unique name, this has to be regionally unique 
5. Untick the checkbox against `5. Untick the checkboz against `, then attest to the acknoledgement of `Turning off block all public access might result in this bucket and the objects within becoming public`
6. Proceed to create the bucket!
7. In the S3 Dashboard, you should now see the new bucket listed and the `access` column's value to be : `Objects can be public`.

## Set up public permissions
This section guides on changing permissions for the previously created bucket as per [AWS bucket policy guides](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html#example-bucket-policies-use-case-2)
In other terms, we are modifying the permissions of this bucket and assigning the `S3:GetObject` policy to objects inside the same. These policies can be edited in the permissions tab for AWS Obejects and are written as JSON files.
1. Click on the name of the bucket we want to make public,
2. Navigate to the `Properties` tab & take a note of the Amazon Resource Name or `ARN` of the bucket. It should look something like this: `arn:aws:s3:::YOUR-BUCKET-NAME`
3. Navigate to the `Permissions` tab and find the section on `Bucket Policy`.
4. Assign the policy to enable objects to be publicly accessable by clicking on the `edit` button and then pasting the following stub into the editor

*An Example policy in JSON to allow S3:GetObjects for any anonymous users:*
```json

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```
5. Adopt the example listed here by motifying the arn listed in this example snippet ( which is `arn:aws:s3:::YOUR-BUCKET-NAME` ) to the ARN of your bucket noted earlier (in step 2). Then save changes.
6. Assert that the `Access` Column for the S3 bucket states `Public`! Cheers! 

This will make any file inside your S3 bucket publicly accessable and can hence be embeded in your web apps.
