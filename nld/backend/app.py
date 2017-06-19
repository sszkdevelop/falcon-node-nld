"""
Sriharsha Samala
"""

import falcon
from falcon_cors import CORS

from backend.qinsight import QIResource

cors = CORS(allow_all_origins=True, allow_all_headers=True, allow_all_methods=True)
# public_cors = CORS(allow_all_origins=True, allow_all_headers=True)
api = falcon.API(middleware=[cors.middleware])

qires = QIResource()
api.add_route('/qi', qires)