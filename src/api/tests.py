from django.test import TestCase, Client
from json import loads, dumps

AllContactURL = 'http://127.0.0.1:8000/api/v1/contact/all'
AddContactURL = 'http://127.0.0.1:8000/api/v1/contact'


class APITestCase(TestCase):
    response_id = None
    
    def test_a_initial(self):
        c = Client()
        response = c.get(AllContactURL)

        self.assertEqual(
            type(response.json()),
            list,
            "response should be list"
        )

    
    def add(self):
        c = Client()
        return c.post(AddContactURL, {
            "name": "Kamal"
        })

    
    def test_b_add(self):
        response = self.add()

        self.assertEqual(
            response.status_code,
            201,
            "Client should able to add name"
        )
    
    def test_c_delete(self):
        response = self.add()

        c = Client()
        response = c.delete("{}/{}".format(
            AddContactURL,
            response.json()["id"]
        ))

        self.assertEqual(
            response.status_code,
            204,
            "Client should able to delete name"
        )
    
    def test_d_update(self):
        response = self.add()

        c = Client()
        response = c.put(
            "{}/{}".format(
                AddContactURL,
                response.json()["id"]
            ), dumps({
                "name": "Shakil"
            }),
            content_type='application/json'
        )

        self.assertEqual(
            response.json()["name"],
            "Shakil",
            "Client should able to change name"
        )

    




