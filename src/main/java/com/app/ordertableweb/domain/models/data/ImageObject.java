
package com.app.ordertableweb.domain.models.data;

import java.awt.image.BufferedImage;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.Objects;

public class ImageObject {
    private byte[] bytes;
    private String base64String;
    private Integer width;
    private Integer height;
    private BufferedImage bufferedImage;
    private String filename;
    private Long size;
    
    public ImageObject() {
        
    }

    public ImageObject(byte[] bytes, String base64String, Integer width, Integer height,
            BufferedImage bufferedImage, String filename, Long size) {
        super();
        this.bytes = bytes;
        this.base64String = base64String;
        this.width = width;
        this.height = height;
        this.bufferedImage = bufferedImage;
        this.filename = filename;
        this.size = size;
    }

    public byte[] getBytes() {
        return bytes;
    }

    public void setBytes(byte[] bytes) {
        this.bytes = bytes;
    }

    public String getBase64String() {
        return base64String;
    }

    public void setBase64String(String base64String) {
        this.base64String = base64String;
    }

    public Integer getWidth() {
        return width;
    }

    public void setWidth(Integer width) {
        this.width = width;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public BufferedImage getBufferedImage() {
        return bufferedImage;
    }

    public void setBufferedImage(BufferedImage bufferedImage) {
        this.bufferedImage = bufferedImage;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }
    
    
    @Override
    public String toString() {
        return "ImageObject [bytes=" + Arrays.toString(bytes) + ", base64String=" + base64String + ", width=" + width
                + ", height=" + height + ", bufferedImage=" + bufferedImage + ", filename=" + filename + ", size="
                + size + "]";
    }

    @Override
    public int hashCode() {
        return Objects.hash(bytes, base64String, width, height, bufferedImage, filename, size);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        ImageObject other = (ImageObject) obj;
        return Arrays.equals(bytes, other.bytes)
                && Objects.equals(base64String, other.base64String)
                && Objects.equals(width, other.width)
                && Objects.equals(height, other.height)
                && Objects.equals(bufferedImage, other.bufferedImage)
                && Objects.equals(filename, other.filename)
                && Objects.equals(size, other.size);
    }
}

