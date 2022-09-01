// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

// containes structure as of user as in mongoose user.js so that we can create a provider based on this user

class User {
  final String id;
  final String name;
  final String password;
  final String address;
  final String type;
  final String token;

  User(this.id, this.name, this.password, this.address, this.type, this.token);

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'password': password,
      'address': address,
      'type': type,
      'token': token,
    };
  }

  factory User.fromMap(Map<String, dynamic> map) {
    return User(
      map['_id'] as String,
      map['name'] as String,
      map['password'] as String,
      map['address'] as String,
      map['type'] as String,
      map['token'] as String,
    );
  }

  String toJson() => json.encode(toMap());

  factory User.fromJson(String source) =>
      User.fromMap(json.decode(source) as Map<String, dynamic>);
}
