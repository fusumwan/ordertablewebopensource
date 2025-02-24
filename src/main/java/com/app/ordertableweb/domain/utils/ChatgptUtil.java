
package com.app.ordertableweb.domain.utils;

import java.io.IOException;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class ChatgptUtil {
	private static final String chatgptApiKeyName="chatgptapikey";
	private static final String chatgptApiKey="";
	
	public static String callChatGPTAPI(String message) throws IOException {
		// Set the URL of the API
	    String apiURL = "https://api.openai.com/v1/chat/completions";
	    
	    // Set the access key for the API
	    String apiKey = ChatgptUtil.chatgptApiKey;
	    
	    // Escape special symbols for messages
	    String escapedMessage = escapeSpecialCharacters(message);

	    // Set the payload of the API request (payload)
	    String payload = "{\"model\": \"gpt-3.5-turbo\", \"messages\": [{\"role\": \"system\", \"content\": \"You are a helpful assistant.\"}, {\"role\": \"user\", \"content\": \"" + escapedMessage + "\"}]}";

	    // Create a URL object
	    URL url = new URL(apiURL);
	    
	    // Create an HTTP connection
	    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
	    
	    // Set the request method to POST
	    connection.setRequestMethod("POST");
	    
	    // Allow output request content
	    connection.setRequestProperty("Authorization", "Bearer " + apiKey);
	    connection.setRequestProperty("Content-Type", "application/json");
	    
	    // Allow output request content
	    connection.setDoOutput(true);
	    
	    // Send request content
	    try (DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream())) {
	        byte[] payloadBytes = payload.getBytes(StandardCharsets.UTF_8);
	        outputStream.write(payloadBytes);
	    }
	    
	    // Get the API response
	    try (BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
	        StringBuilder response = new StringBuilder();
	        String line;
	        while ((line = reader.readLine()) != null) {
	            response.append(line);
	        }
	        return response.toString();
	    }
	}
	// 對特殊符號進行轉義的方法
    private static String escapeSpecialCharacters(String message) {
        return message.replace("\\", "\\\\")
                      .replace("\"", "\\\"")
                      .replace("\n", "\\n")
                      .replace("\r", "\\r")
                      .replace("\t", "\\t");
    }
}

