package com.hulkstore.hulkstoreApi.dtos;
/**
 * @author Luis Martinez
 *
 */
public class Message {
    private String message;
    public Message(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
