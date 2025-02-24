
package com.app.ordertableweb.domain.utils;

import org.apache.commons.io.IOUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.IOException;

public class FileUtils {
    public static byte[] convertMultipartFileToByteArray(MultipartFile file) throws IOException {
        return IOUtils.toByteArray(file.getInputStream());
    }
}

