# -*- coding: utf-8 -*-
"""
Created on Mon Apr 23 15:16:29 2018

@author: borgy
"""

import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

httpd = socketserver.TCPServer(("", PORT), Handler)

print( "serving at port", PORT)
httpd.serve_forever()