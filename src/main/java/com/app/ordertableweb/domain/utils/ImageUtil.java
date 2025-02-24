
package com.app.ordertableweb.domain.utils;

import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.IOException;

import java.io.IOException;
import java.math.BigInteger;
import java.util.Base64;

import javax.imageio.ImageIO;

import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.app.ordertableweb.domain.models.data.ImageObject;

public class ImageUtil {
	public static String byteArrayToBase64(byte[] byteArr) {
		if (byteArr != null && byteArr.length > 0) {
	        return Base64.getEncoder().encodeToString(byteArr);
	    }
	    return null;
	}
	
	public static BufferedImage byteArrayToBufferedImage(byte[] imageArr) {
		// Assuming you have a byte[] representing an image
        byte[] imageBytes = imageArr;
        BufferedImage bufferedImage=null;

        try {
            // Convert byte[] to ByteArrayInputStream
            ByteArrayInputStream bis = new ByteArrayInputStream(imageBytes);

            // Read the image from the ByteArrayInputStream
            bufferedImage = ImageIO.read(bis);

            // Do further processing with the BufferedImage
            // ...

            // Close the ByteArrayInputStream
            bis.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return bufferedImage;
	}
	public static ImageObject multipartFileToImageObject(MultipartFile imageFile) {
		ImageObject imageObject=new ImageObject();
		// Save the cover image
        if (imageFile != null) {
        	if (!imageFile.isEmpty()) {
	            String originalFilename = StringUtils.cleanPath(imageFile.getOriginalFilename());
	            if(originalFilename.contains("..")){
	    			System.out.println("not a a valid file");
	    		}else {
		            Long fileSize = imageFile.getSize();
		            
		            // You can perform any necessary operations with the file information
		            System.out.println("Original Filename: " + originalFilename);
		            System.out.println("File Size: " + fileSize + " bytes");
		            
		            // Example: Get image dimensions
		            try {
		            	BufferedImage bufferedImage = ImageIO.read(imageFile.getInputStream());
		                
		                byte[] imageBytes = imageFile.getBytes();
		                Integer width =  Integer.valueOf(bufferedImage.getWidth());
		                Integer height =  Integer.valueOf(bufferedImage.getHeight());
		                
		                System.out.println("Width: " + width + " pixels");
		                System.out.println("Height: " + height + " pixels");
		                if (imageBytes != null && imageBytes.length > 0) {
		                	imageObject.setBase64String(Base64.getEncoder().encodeToString(imageBytes));
		        	    }
		                imageObject.setWidth(width);
		                imageObject.setHeight(height);
		                imageObject.setBufferedImage(bufferedImage);
		                imageObject.setBytes(imageBytes);
		                imageObject.setFilename(originalFilename);
		                imageObject.setSize(fileSize);
		                
		            } catch (IOException e) {
		                // Handle exception
		                e.printStackTrace();
		            }
	    		}
        	}
        }
        return imageObject;
	}
	
	public static ImageObject request(MultipartHttpServletRequest request,String requestParameter,String requestParamterBase64) {
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
		MultipartFile imageFile = multipartRequest.getFile(requestParameter+requestParamterBase64);
		return ImageUtil.multipartFileToImageObject(imageFile);
		
	}

}
