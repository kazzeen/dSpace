import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  IconButton,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ReplyIcon from '@mui/icons-material/Reply';

const Chat = ({ open, onClose, recipientName }) => {
  const [message, setMessage] = useState('');
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [editMessage, setEditMessage] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [messages, setMessages] = useState([
    // Mock messages - replace with actual message data
    {
      id: 1,
      sender: 'You',
      text: 'Hi, I saw your profile and I think we might be compatible roommates!',
      timestamp: '10:30 AM',
      replyTo: null
    },
    {
      id: 2,
      sender: recipientName,
      text: 'Hello! Thanks for reaching out. I\'d love to discuss more about potentially being roommates.',
      timestamp: '10:32 AM',
      replyTo: null
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: 'You',
        text: message.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        replyTo: replyingTo
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      setReplyingTo(null);
    }
  };

  const handleReply = (messageId) => {
    setReplyingTo(messageId);
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  const handleEditMessage = (messageId) => {
    const messageToEdit = messages.find(msg => msg.id === messageId);
    setEditingMessageId(messageId);
    setEditMessage(messageToEdit.text);
  };

  const handleSaveEdit = (messageId) => {
    setMessages(messages.map(msg =>
      msg.id === messageId
        ? { ...msg, text: editMessage.trim() }
        : msg
    ));
    setEditingMessageId(null);
    setEditMessage('');
  };

  const handleDeleteMessage = (messageId) => {
    setMessages(messages.filter(msg => msg.id !== messageId));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getReplyingToMessage = (replyId) => {
    return messages.find(msg => msg.id === replyId);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          height: '80vh',
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6">Chat with {recipientName}</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {messages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'You' ? 'flex-end' : 'flex-start'
              }}
            >
              <Paper
                sx={{
                  p: 1.5,
                  maxWidth: '70%',
                  bgcolor: msg.sender === 'You' ? 'primary.main' : 'background.paper',
                  borderRadius: 2
                }}
              >
                {msg.replyTo && (
                  <Box
                    sx={{
                      p: 1,
                      mb: 1,
                      borderLeft: '3px solid',
                      borderColor: 'secondary.main',
                      bgcolor: 'action.hover',
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Replying to {getReplyingToMessage(msg.replyTo)?.sender}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      {getReplyingToMessage(msg.replyTo)?.text}
                    </Typography>
                  </Box>
                )}
                {editingMessageId === msg.id ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <TextField
                      fullWidth
                      multiline
                      value={editMessage}
                      onChange={(e) => setEditMessage(e.target.value)}
                      size="small"
                      autoFocus
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      <Button
                        size="small"
                        onClick={() => setEditingMessageId(null)}
                        color="inherit"
                      >
                        Cancel
                      </Button>
                      <Button
                        size="small"
                        onClick={() => handleSaveEdit(msg.id)}
                        variant="contained"
                        disabled={!editMessage.trim()}
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <>
                    <Typography variant="body1">{msg.text}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 0.5 }}>
                      <Typography variant="caption" color="text.secondary">
                        {msg.timestamp}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                        <IconButton
                          size="small"
                          onClick={() => handleReply(msg.id)}
                          sx={{ color: msg.sender === 'You' ? '#000000' : 'inherit' }}
                        >
                          <ReplyIcon fontSize="small" />
                        </IconButton>
                        {msg.sender === 'You' && (
                          <>
                            <Button
                              size="small"
                              onClick={() => handleEditMessage(msg.id)}
                              sx={{ minWidth: 'auto', px: 1, color: '#000000' }}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              color="error"
                              onClick={() => handleDeleteMessage(msg.id)}
                              sx={{ minWidth: 'auto', px: 1 }}
                            >
                              Delete
                            </Button>
                          </>
                        )}
                      </Box>
                    </Box>
                  </>
                )}
              </Paper>
            </Box>
          ))}
        </Box>
      </DialogContent>
      <Divider />
      <DialogActions sx={{ p: 2, bgcolor: 'background.paper', flexDirection: 'column' }}>
        {replyingTo && (
          <Box
            sx={{
              width: '100%',
              p: 1,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: 'action.hover',
              borderRadius: 1
            }}
          >
            <Typography variant="body2">
              Replying to: {getReplyingToMessage(replyingTo)?.text.substring(0, 50)}...
            </Typography>
            <IconButton size="small" onClick={cancelReply}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
        )}
        <Box sx={{ display: 'flex', width: '100%' }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            variant="outlined"
            sx={{ mr: 1 }}
          />
          <Button
            variant="contained"
            onClick={handleSendMessage}
            disabled={!message.trim()}
          >
            Send
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default Chat;