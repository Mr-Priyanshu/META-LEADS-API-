# Meta API Integration for Lead Management in React + Vite

This repository provides a minimal setup to integrate the **Meta API** for managing leads in your **CRM** application built with **React** and **Vite**. 

## Mr-Priyanshu
----------------------------------------------------------------------------------

## Integrating Meta API for Lead Management

Follow these steps to efficiently manage leads through the **Meta API**:

### Prerequisites
1. **Facebook Account**: Ensure you have a verified Facebook account.
2. **Active Ad Campaigns**: Confirm that you have active ad campaigns on Facebook.
3. **Meta Setup Verification**: Ensure your **Meta for Developers** setup is complete.

### Step-by-Step Integration
1. **Open Meta Developer Mode**: Access the [Meta for Developers](https://developers.facebook.com/) portal.
2. **Create a New App**: 
   - Navigate to **My Apps**.
   - Click on **Create New App** and follow the setup process.
3. **Generate Access Token**: 
   - Go to the Graph API section and generate a User Access Token.
4. **Fetching Lead Data**: 
   - Use the `form_id` to submit requests and retrieve lead information.
5. **Using the Leads API**: 
   - Access the `/leads` endpoint to fetch all leads.
6. **Testing with Postman**: 
   - Test the API request using Postman to ensure data retrieval.

### Integrating with Your CRM
- Store leads in your database directly from the frontend using API responses, ensuring all data is safely saved.


### Prerequisites

1. **Check Facebook Account**: Ensure you have access to your Facebook account.
2. **Check Active Ad Campaigns**: Confirm that there are active ad campaigns linked to your account.
3. **Verify Meta Setup**: Ensure your Meta setup is correct and complete.

### Step-by-Step Integration

1. **Open Meta Developer Mode**:
   - Navigate to the [Meta for Developers](https://developers.facebook.com/) portal.

2. **Create a New App**:
   - Go to **My Apps**.
   - Click on **Create New App** if you don’t have one.
   - Complete the setup and necessary permissions.
   - Submit your app for review.

3. **Generate Access Token**:
   - Go to the Graph API section in your app.
   - Before generating a token, check the permissions at the bottom. If permissions are missing, add them under the **Use Cases** section.
   - Generate your **User Access Token**.
   - Select the Facebook page whose data you need access to.
   - Log in and reconnect your Facebook Page Account with the app you created.

4. **Fetching Lead Data**:
   - If you are unable to retrieve the page ID, manually download leads in Excel format to get all the IDs.
   - Extract the `form_id` from the downloaded leads, as this is essential for fetching lead data.
   - Use the `form_id` in your request to submit and retrieve all lead information.

5. **Using the Leads API**:
   - Construct your API request using the `/leads` endpoint, which will return all leads associated with the specified form.
   - Check for SDK options in the API documentation.
   - Copy the cURL command provided.

6. **Testing the API with Postman**:
   - Open Postman and paste the copied cURL command.
   - Test the API to see if data is being returned successfully.

### Integrating with Your CRM

- Once you confirm that data is being returned from the API, you can integrate this functionality into your CRM or project.
- For frontend management, store leads directly in your database. Ensure that the data is fetched from the API and stored simultaneously.
- This method ensures that even if the API fails, your lead data remains saved in your database, allowing for consistent access and management.

### Conclusion

Integrating the Meta API allows for efficient lead management in your CRM, providing valuable insights and data for your business needs. Follow the steps outlined above to set up your project successfully.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
