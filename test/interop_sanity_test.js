/*
 *
 * Copyright 2014, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

var interop_server = require('../interop/interop_server.js');
var interop_client = require('../interop/interop_client.js');

var port_picker = require('../port_picker');

var server;

var port;

describe('Interop tests', function() {
  before(function(done) {
    port_picker.nextAvailablePort(function(addr) {
      server = interop_server.getServer(addr.substring(addr.indexOf(':') + 1));
      port = addr;
      done();
    });
  });
  it.only('should pass empty_unary', function(done) {
    interop_client.runTest(port, null, 'empty_unary', false, done);
  });
  it('should pass large_unary', function(done) {
    interop_client.runTest(port, null, 'large_unary', false, done);
  });
  it('should pass client_streaming', function(done) {
    interop_client.runTest(port, null, 'client_streaming', false, done);
  });
  it('should pass server_streaming', function(done) {
    interop_client.runTest(port, null, 'server_streaming', false, done);
  });
  it('should pass ping_pong', function(done) {
    interop_client.runTest(port, null, 'ping_pong', false, done);
  });
  it('should pass empty_stream', function(done) {
    interop_client.runTest(port, null, 'empty_stream', false, done);
  });
});
