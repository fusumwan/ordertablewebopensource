
package com.app.ordertableweb.domain.utils;

public class ByteConverter {
    public static byte[] ByteArrayTobyteArray(Byte[] byteArray) {
        byte[] primitiveArray = new byte[byteArray.length];

        for (int i = 0; i < byteArray.length; i++) {
            primitiveArray[i] = byteArray[i];
        }

        return primitiveArray;
    }
}

